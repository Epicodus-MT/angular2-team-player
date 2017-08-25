import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    RosterComponent,
    PlayerDetailComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
