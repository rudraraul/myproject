import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { mobileComponent } from './shared/component/mobile/mobile.component'; 
@NgModule({
  declarations: [
    AppComponent,
    mobileComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
