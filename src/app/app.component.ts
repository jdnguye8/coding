import { Component, OnInit , Input, Output} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { tab, nav} from './app.service';
import { AppService }  from "./app.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit{

  title = 'SWUVSA Apex-3';
  tabs: tab [] = [];
  currentNav: nav = null; 
  navs: nav[] = [];
  currentTab: tab = null;
  constructor(private afs: AngularFirestore, private as: AppService){}

  ngOnInit(){
    this.as.getNavs().subscribe(data => {
      this.navs = data;
      this.currentNav = this.navs.find(data => {
        return data.active;
      }); 
      this.tabs = this.currentNav.tabs;
      this.currentTab = this.tabs.find(data => {
        return data.active;
      })
    });
  }
  changeNav(nav){
    this.currentNav = nav;
    this.tabs = nav.tabs;
    this.currentTab = this.tabs.find(data => {
      return data.active;
    })
  }
  changeTab(tab){
    this.currentTab.active = false; // mark it as inactive one
    this.currentTab = tab; // reassign the current tab
    this.currentTab.active = true; // set active
  }
  update(id){
    let a = this.afs.doc('navigation/' + id);
    a.update({tabs: this.tabs});
  }
  
}
