import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    MainContentComponent,
         
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       
       RouterModule.forRoot([
        { path: 'videos', component: VideosComponent }, 
            ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
