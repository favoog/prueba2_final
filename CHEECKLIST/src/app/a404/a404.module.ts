import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A404PageRoutingModule } from './a404-routing.module';

import { A404Page } from './a404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A404PageRoutingModule
  ],
  declarations: [A404Page]
})
export class A404PageModule {}
