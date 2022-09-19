import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/premier-league',
    pathMatch: 'full'
  },
  
  {
    path: 'pages/serie-a',
    loadChildren: () => import('./pages/serie-a/serie-a.module').then( m => m.SerieAPageModule)
  },
  {
    path: 'pages/premier-league',
    loadChildren: () => import('./pages/premier-league/premier-league.module').then( m => m.PremierLeaguePageModule)
  },
  {
    path: 'pages/la-liga',
    loadChildren: () => import('./pages/la-liga/la-liga.module').then( m => m.LaLigaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
