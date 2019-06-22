import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    SharedModule
  ]
})
export class CaseModule { }
