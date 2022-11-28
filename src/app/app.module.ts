import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from 'projects/componentes/src/public-api';
import { HomeSharedModule } from 'projects/home/src/app/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    HomeSharedModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
