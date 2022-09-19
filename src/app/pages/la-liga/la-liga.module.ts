import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaLigaPageRoutingModule } from './la-liga-routing.module';

import { LaLigaPage } from './la-liga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaLigaPageRoutingModule
  ],
  declarations: [LaLigaPage]
})
export class LaLigaPageModule {}
