import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGithubService {

  link = 'https://api.github.com/users?since=10';
  constructor(
    private http: HttpClient
  ) { }

  getUsersGitHub(): Observable<{}> {
    return this.http.get(this.link);
  }
}
