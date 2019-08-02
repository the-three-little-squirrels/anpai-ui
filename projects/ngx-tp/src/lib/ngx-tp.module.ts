import { NgModule } from '@angular/core';
import { NgxTpComponent } from './ngx-tp.component';
import { TpTableComponent } from './tp-table/tp-table.component';
import { TpFormComponent } from './tp-form/tp-form.component';



@NgModule({
  declarations: [NgxTpComponent, TpTableComponent, TpFormComponent],
  imports: [
  ],
  exports: [NgxTpComponent]
})
export class NgxTpModule { }
