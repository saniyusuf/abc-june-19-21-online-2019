import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Video } from "./dashboard/types";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VideoDataService {
  constructor(private _http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this._http
      .get<Video[]>(API_URL)
      .pipe(map(videoData => videoData.slice(0, 3)));
  }
}
const API_URL = "https://api.angularbootcamp.com/videos";
