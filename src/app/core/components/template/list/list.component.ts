import { Component, OnInit } from '@angular/core';
import { Template, TemplateItem } from '../models/template-options';

@Component({
    selector: 'ap-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit {

    template: Template;
    templateItems: TemplateItem[];
    searchValue;
    constructor() { }

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

        this.templateItems = this.template.attributes;
    }

    search() { }

    reset() { }
}
