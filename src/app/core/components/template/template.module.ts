import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { ListComponent } from './list/list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateService } from './template.service';
import { InfoItemComponent } from './info/info-item/info-item.component';


@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        TemplateComponent,
        ListComponent,
        InfoComponent
    ],
    declarations: [
        TemplateComponent,
        ListComponent,
        InfoComponent,
        InfoItemComponent
    ],
    providers: [
        TemplateService
    ],
})
export class TemplateModule { }
