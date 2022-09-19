import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremierLeaguePageRoutingModule } from './premier-league-routing.module';

import { PremierLeaguePage } from './premier-league.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremierLeaguePageRoutingModule
  ],
  declarations: [PremierLeaguePage]
})
export class PremierLeaguePageModule {}
