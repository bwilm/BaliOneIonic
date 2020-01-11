import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//  Angular Firebase Imports

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { AuthGuard } from './core/auth.guard';
import { FoodPageModule } from './food/food.module';
import { DayclubsPageModule } from './dayclubs/dayclubs.module';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


const firebaseConfig = {
  apiKey: environment.fsAPIkey,
  authDomain: 'balione.firebaseapp.com',
  databaseURL: 'https://balione.firebaseio.com',
  projectId: 'balione',
  storageBucket: 'balione.appspot.com',
  messagingSenderId: '290589348099',
  appId: '1:290589348099:web:f8c68e8572ae50a6229936'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  HttpClientModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule,
  AngularFireDatabaseModule,
  // AgmCoreModule.forRoot({
  //   apiKey: environment.agmAPIkey
  // })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [AuthGuard],
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
