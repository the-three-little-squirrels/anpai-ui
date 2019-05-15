import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { ListComponent } from './list/list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { TextComponent } from './info/components/text/text.component';


@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule
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
        TextComponent
    ],
    providers: [],
})
export class TemplateModule { }
