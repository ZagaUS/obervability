import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ObservabilityComponent } from './observability/observability.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservabilityDocumentationComponent } from './observability-documentation/observability-documentation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    MainContentComponent,
    ObservabilityComponent,
    SustainabilityComponent,
    ObservabilityDocumentationComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       
       RouterModule.forRoot([
        { path: 'videos', component: VideosComponent }, 
        { path: 'observability', component: ObservabilityComponent},
        { path: 'sustainability', component: SustainabilityComponent}
            ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
