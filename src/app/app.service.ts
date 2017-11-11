import { Injectable } from '@angular/core';
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

@Injectable()
export class AppService {
  tabs: tab[] = [];
  navigationCollection: AngularFirestoreCollection<nav>;
  navigations: Observable<nav[]>;
  navs: nav[] = []; 

  constructor(private afs: AngularFirestore){ 
    this.navigationCollection = this.afs.collection('navigation', ref => {
      return ref.orderBy("navNumber");
    });
    this.navigations = this.navigationCollection.valueChanges();
    // this.navigations.subscribe(data => {
    //   this.navs = data;
    //   this.tabs = data[0].tabs;
    // });

  }

  getTabs() : tab[]{
    return this.tabs;
  }

  getNavs(): Observable<nav[]>{
    return this.navigations;
    // return this.navs;
  }

  addTab(id: string, name: string, tabNumber: number, active: boolean){
    let t: tab = {
      "active": active,
      "id": id,
      "name": name,
      "tabNumber": tabNumber
    }
    this.tabs.push(t);
    // this.navigationCollection.add(); // update firebase
  }
}