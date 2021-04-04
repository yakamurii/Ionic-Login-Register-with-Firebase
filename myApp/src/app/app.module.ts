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
            AngularFireModule.initializeApp({apiKey: "your-credentials",
            authDomain: "your-credentials",
            databaseURL: "your-credentials",
            projectId: "your-credentials",
            storageBucket: "your-credentials",
            messagingSenderId: "your-credentials",
            appId: "your-credentials",
            measurementId: "your-credentials"
        }),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireDatabaseModule,
            AngularFireStorageModule],
  providers: [{ provide: BUCKET, useValue: 'your-storageBucket'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
