import { NgModule } from '@angular/core';
import { NgxTpComponent } from './ngx-tp.component';
import { TpTableComponent } from './tp-table/tp-table.component';
import { TpFormComponent } from './tp-form/tp-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [NgxTpComponent, TpTableComponent, TpFormComponent],
  imports: [
    NgZorroAntdModule
  ],
  exports: [NgxTpComponent]
})
export class NgxTpModule { }
