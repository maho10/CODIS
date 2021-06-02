import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePageRoutingModule } from './sample-routing.module';

import { SamplePage } from './sample.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SamplePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [SamplePage]
})
export class SamplePageModule {}
