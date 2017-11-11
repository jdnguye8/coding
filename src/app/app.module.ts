import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { RouterModule } from '@angular/router';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Service
import { AppService } from './app.service';


// Components

import { ApexMainComponent } from './apex-main/apex-main.component';
const routerRoutes = [
  {
    path: '',
    component: ApexMainComponent
  }, 
  {
    path: 'apex-3',
    component: ApexMainComponent
  },
  {
    path: 'login',
    component: ApexMainComponent
  }
]

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routerRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AppService
  ],
  declarations: [
    AppComponent, 
    ApexMainComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
