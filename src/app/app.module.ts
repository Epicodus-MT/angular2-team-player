import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD-MB2TMXzqEA22uwHgYUQbQ3kF3S2KIIk",
  authDomain: "angular2-team-roster-f643b.firebaseapp.com",
  databaseURL: "https://angular2-team-roster-f643b.firebaseio.com",
  storageBucket: "",
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    RosterComponent,
    PlayerDetailComponent,
    AdminComponent,
    EditPlayerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
