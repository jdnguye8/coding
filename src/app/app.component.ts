import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export interface tab {
  name: String, 
  tabNumber: number, 
  active: boolean, 
  id: String
}

export interface nav {
  name: String, 
  active: boolean,
  displayText: String,
  link: String, 
  tabs: tab[], 
  navNumber: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'SWUVSA Apex-3';
  tabs: tab [] = [];
  currentNav: nav; 
  
  navigationCollection: AngularFirestoreCollection<nav>;
  navigations: Observable<nav[]>;
  constructor(private afs: AngularFirestore){}

  ngOnInit(){
    this.navigationCollection = this.afs.collection('navigation', ref => {
      return ref.orderBy("navNumber");
    });
    this.navigations = this.navigationCollection.valueChanges();
    this.navigations.subscribe(data => {
      this.currentNav = data[0];
      this.tabs = data[0].tabs;
    }); // get the initial one 
    // Update the tabs when switch views + etc
    // this.navigations

    
    // console.log(this.navigations);
  }
  changeNav(nav){
    this.currentNav = nav;
    this.tabs = nav.tabs;
  }
  update(id){
    let a = this.afs.doc('navigation/' + id);
    a.update({tabs: this.tabs});
  }
}
