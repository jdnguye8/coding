import { Component } from '@angular/core';

export interface tab {
  name: String, 
  tabNumber: number, 
  active: boolean, 
  id: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  tabs: tab [] = [];
  constructor(){
    this.tabs.push({name: "Main", tabNumber: 1, active: true, id: 'tab1'});
    this.tabs.push({name: "Second", tabNumber: 2, active: false, id: 'tab2'});
    this.tabs.push({name: "Third", tabNumber: 3, active: false, id: 'tab3'});
  }
}
