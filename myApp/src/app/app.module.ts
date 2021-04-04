import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp({apiKey: "AIzaSyAJA-aJ-_7kdnBXimbis5PB7ZjW9S3Yzxg",
            authDomain: "myapp-5176d.firebaseapp.com",
            databaseURL: "https://myapp-5176d-default-rtdb.firebaseio.com",
            projectId: "myapp-5176d",
            storageBucket: "myapp-5176d.appspot.com",
            messagingSenderId: "609728310081",
            appId: "1:609728310081:web:a0a7a1d46889033a79cfc0",
            measurementId: "G-YWV5FKM7KP"
        }),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireDatabaseModule,
            AngularFireStorageModule],
  providers: [{ provide: BUCKET, useValue: 'myapp-5176d.appspot.com'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
