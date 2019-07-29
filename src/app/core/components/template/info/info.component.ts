import { Component, OnInit } from '@angular/core';
import { Template, TemplateItem } from '../models/template-options';
import { ItemBase } from '../models/item-base';
import { TemplateService } from '../template.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd';

@Component({
    selector: 'ap-info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.css']
})

export class InfoComponent implements OnInit {

    template: Template;
    templateItems: TemplateItem[];
    itemBases: ItemBase[];
    formGroup: FormGroup;
    validateForm: FormGroup;
    nodes = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-1',
                    key: '0-0-1'
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                    key: '0-0-2'
                }
            ]
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1'
        }
    ];
    onExpandChange(e: Required<NzFormatEmitEvent>): void {
        const node = e.node;
        if (node && node.getChildren().length === 0 && node.isExpanded) {
            this.loadNode().then(data => {
                node.addChildren(data);
            });
        }
    }

    loadNode(): Promise<any[]> {
        return new Promise(resolve => {
            setTimeout(
                () =>
                    resolve([
                        { title: 'Child Node', key: `${new Date().getTime()}-0` },
                        { title: 'Child Node', key: `${new Date().getTime()}-1` }
                    ]),
                1000
            );
        });
    }

    constructor(
        private templateService: TemplateService,
        private fb: FormBuilder
    ) {
        this.validateForm = this.fb.group({
            userName: ['0-0-1'],
        });
    }
    submitForm() {

    }


    ngOnInit() {





        this.template = {
            templateNo: 'customerList',
            templateName: '客户列表',
            span: 1,
            export: false,
            type: 'List',
            groupName: [],
            attributes: [
                {
                    sortNo: 0,
                    id: 'customerId',
                    name: '客户编号',
                    type: 'String',
                    defaultValue: null,
                    datePattern: null,
                    pattern: null,
                    max: null,
                    min: null,
                    suffix: null,
                    codeId: null,
                    itemId: [''],
                    itemName: [''],
                    htmlStyle: null,
                    alignType: 'Center',
                    editType: 'Text',
                    length: 20,
                    scale: null,
                    isVisible: true,
                    isReadOnly: false,
                    isRequired: false,
                    isSorted: true,
                    isFilter: true,
                    filterType: null,
                    groupIndex: -1,
                    span: 2,
                    child: null,
                }, {
                    sortNo: 1,
                    id: 'customerName',
                    name: '客户名称',
                    type: 'String',
                    defaultValue: null,
                    datePattern: null,
                    pattern: null,
                    max: null,
                    min: null,
                    suffix: null,
                    codeId: null,
                    itemId: [''],
                    itemName: [''],
                    htmlStyle: null,
                    alignType: 'Center',
                    editType: 'Text',
                    length: 20,
                    scale: null,
                    isVisible: true,
                    isReadOnly: false,
                    isRequired: false,
                    isSorted: true,
                    isFilter: true,
                    filterType: null,
                    groupIndex: -1,
                    span: 2,
                    child: null,
                },
                {
                    sortNo: 2,
                    id: 'certId',
                    name: '证件编号',
                    type: 'String',
                    defaultValue: null,
                    datePattern: null,
                    pattern: null,
                    max: null,
                    min: null,
                    suffix: null,
                    codeId: null,
                    itemId: [''],
                    itemName: [''],
                    htmlStyle: null,
                    alignType: 'Center',
                    editType: 'Text',
                    length: 20,
                    scale: null,
                    isVisible: true,
                    isReadOnly: false,
                    isRequired: false,
                    isSorted: true,
                    isFilter: true,
                    filterType: null,
                    groupIndex: -1,
                    span: 2,
                    child: null,
                }
            ]
        };
        console.log(this.templateService.generateItems(this.template));
    }
}
