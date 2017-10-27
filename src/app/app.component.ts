import { Component } from '@angular/core';

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
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'SWUVSA Apex-3';
  tabs: tab [] = [];
  navigation: nav[];
  constructor(){
    this.tabs.push({name: "Main", tabNumber: 1, active: true, id: 'tab1'});
    this.tabs.push({name: "Second", tabNumber: 2, active: false, id: 'tab2'});
    this.tabs.push({name: "Third", tabNumber: 3, active: false, id: 'tab3'});
    this.tabs.push({name: "Fourth", tabNumber: 4, active: false, id: 'tab4'});

    this.navigation = [
      {
        name: "home", 
        active: true,
        displayText: "Home",
        link: "/", 
        tabs: [],
      },
      {
        name: "apex-3", 
        active: false,
        displayText: "Apex-3",
        link: "/register", 
        tabs: [],
      }
    ]
  }
}
