import { NgModule } from '@angular/core';
import { NgxTpComponent } from './ngx-tp.component';
import { TpTableComponent } from './tp-table/tp-table.component';
import { TpFormComponent } from './tp-form/tp-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxTpComponent,
    TpTableComponent,
    TpFormComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NgxTpComponent,
    TpTableComponent,
    TpFormComponent
  ]
})
export class NgxTpModule { }
