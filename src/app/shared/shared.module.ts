import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../core/components/template/template.module';
import { NzBreadCrumbModule } from '../core/components/breadcrumb/nz-breadcrumb.module';

const MODULES = [
    TemplateModule,
    NzBreadCrumbModule
];

const THRIDMODULES = [
    NgZorroAntdModule
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...MODULES,
        ...THRIDMODULES
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...MODULES,
        ...THRIDMODULES
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
