// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { UserGithubService } from 'src/services/user-github.service';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'build-tailwindcss';
  users: any = {};
  constructor(
  ) {
  }

  ngOnInit(): void {
  }




}
