import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoDashboardComponent } from "./video-dashboard/video-dashboard.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { StatFiltersComponent } from "./stat-filters/stat-filters.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { RouterModule, Routes } from "@angular/router";
import { VideoComponent } from "./video/video.component";
import { HttpClientModule } from "@angular/common/http";

const childRoutes: Routes = [{ path: "", component: VideoDashboardComponent }];

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    StatFiltersComponent,
    VideoPlayerComponent,
    VideoComponent
  ],
  imports: [HttpClientModule, CommonModule, RouterModule.forChild(childRoutes)]
})
export class DashboardModule {}
