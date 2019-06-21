import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Video } from "../types";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Video[];
  videoToDisplay;

  constructor(http: HttpClient) {
    http.get<Video[]>(API_URL).subscribe(videoData => (this.videoListData = videoData));
  }

  ngOnInit() {}

  onVideoSelected(video) {
    this.videoToDisplay = video;
  }
}

const API_URL = "https://api.angularbootcamp.com/videos";
