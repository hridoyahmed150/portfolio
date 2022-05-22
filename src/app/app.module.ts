import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
