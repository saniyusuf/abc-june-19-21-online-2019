import { Component, OnInit } from "@angular/core";
import { Video } from "../types";
import { VideoDataService } from "../../video-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Observable<Video[]>;
  videoToDisplay;

  constructor(videoService: VideoDataService) {
    this.videoListData = videoService.loadVideos();
  }

  ngOnInit() {}

  onVideoSelected(video) {
    this.videoToDisplay = video;
  }
}
