import { Component, OnInit } from '@angular/core';
import { UserGithubService } from 'src/services/user-github.service';

@Component({
  selector: 'app-user-github',
  templateUrl: './user-github.component.html',
  styleUrls: ['./user-github.component.scss']
})
export class UserGithubComponent implements OnInit {
  users: any = {};
  constructor(
    private userGithubService: UserGithubService
  ) { }

  ngOnInit(): void {
    this.getUsersGitHub();
  }
  getUsersGitHub(): void {
    this.userGithubService.getUsersGitHub().subscribe((users) => {
      if (users) {
        this.users = users;
      }
    });
  }
}
