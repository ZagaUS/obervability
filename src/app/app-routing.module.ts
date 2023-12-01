import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { VideosComponent } from './videos/videos.component';
import { ObservabilityDocumentationComponent } from './observability-documentation/observability-documentation.component';

const routes: Routes = [

  { path: '', component: MainContentComponent },
  { path : '', component: VideosComponent},
  { path: '', component: ObservabilityDocumentationComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
