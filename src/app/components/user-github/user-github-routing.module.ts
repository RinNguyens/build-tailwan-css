import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserGithubComponent} from './user-github.component';

const routes: Routes = [
  {
    path: '',
    component: UserGithubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGithubRoutingModule { }
