import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremierLeaguePage } from './premier-league.page';

const routes: Routes = [
  {
    path: '',
    component: PremierLeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremierLeaguePageRoutingModule {}
