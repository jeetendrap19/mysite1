import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteWrapComponent } from './site-wrap/site-wrap.component';
import { SiteSection1Component } from './site-section1/site-section1.component';
import { SiteSection2Component } from './site-section2/site-section2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteWrapComponent,
    SiteSection1Component,
    SiteSection2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
