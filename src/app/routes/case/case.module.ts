import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [CaseComponent, TableComponent],
  imports: [
    CommonModule,
    CaseRoutingModule,
    SharedModule,
  ]
})
export class CaseModule { }
