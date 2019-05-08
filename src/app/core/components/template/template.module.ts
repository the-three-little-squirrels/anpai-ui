import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { ListComponent } from './list/list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        TemplateComponent,
        ListComponent
    ],
    providers: [],
})
export class TemplateModule { }
