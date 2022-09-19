import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaLigaPage } from './la-liga.page';

const routes: Routes = [
  {
    path: '',
    component: LaLigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaLigaPageRoutingModule {}
