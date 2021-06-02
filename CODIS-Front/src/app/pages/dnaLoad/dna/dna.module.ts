import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DnaPageRoutingModule } from './dna-routing.module';

import { DnaPage } from './dna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DnaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DnaPage]
})
export class DnaPageModule {}
