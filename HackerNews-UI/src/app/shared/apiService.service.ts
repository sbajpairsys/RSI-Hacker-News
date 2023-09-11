/**
*
* @name: apiService.service.ts
*
* @description: This Api Service contains all Hacker News story related API calls.
*
*
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StoryInfo} from '../models/story.interface';
import { apiConfig} from '../config'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  // method to get list of story details //
  getAllStoryList(): Observable<StoryInfo[]> {   
    return this.http.get<StoryInfo[]>(apiConfig.apiBaseUrl + 'Story/getAllStory');
  }

}
