import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoundButtonComponent } from './round-button/round-button.component';
import { NavCComponent } from './nav-c/nav-c.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundButtonComponent,
    NavCComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
