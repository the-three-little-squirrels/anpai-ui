import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ItemBase } from './models/item-base';
import { ItemCheckBox } from './models/item-checkbox';
import { ItemDate } from './models/item-date';
import { ItemRadio } from './models/item-radio';
import { ItemSearch } from './models/item-search';
import { ItemSelect } from './models/item-select';
import { ItemText } from './models/item-text';
import { ItemTextArea } from './models/item-textarea';
import { EditType, Template, TemplateItem } from './models/template-options';
import { lengthCheck, rangeCheck, scaleCheck } from './validator';

@Injectable()
export class TemplateService {

    constructor() { }

    /**
     * 生成表单
     * @param items 字段实例
     */
    generateFormGroup(items: ItemBase[]): FormGroup {
        const group = {};
        items.forEach(item => {
            group[item.id] = new FormControl(item.defaultValue, this.addValidator(item));
        });
        return new FormGroup(group);
    }

    /**
     * 添加校验数组
     * @param item 字段模板
     */
    addValidator(item: TemplateItem): ValidatorFn[] {
        const validators = [];
        if (item.isRequired) {
            validators.push(Validators.required);
        }
        if (item.type === 'String') {
            if (item.length) {
                validators.push(lengthCheck(item.length));
            }
        }
        if (item.type === 'Integer') {
            if (item.max && item.min) {
                validators.push(rangeCheck(item.min, item.max));
            }
        }
        if (item.type === 'Double') {
            if (item.length && item.scale) {
                validators.push(lengthCheck(item.length), scaleCheck(item.scale));
            }
            if (item.max && item.min) {
                validators.push(rangeCheck(item.min, item.max));
            }
        }
        return validators;
    }

    /**
     * 生成所有模板字段实例
     * @param template 模板或模板字段数组
     */
    generateItems(template: Template | TemplateItem[]): ItemBase[] {
        let items: ItemBase[];
        if (template instanceof Array) {
            items = template.map(item => this.generateItem(item));
        } else {
            items = template.attributes.map(item => this.generateItem(item));
        }
        return items.sort((a, b) => a.sortNo > b.sortNo ? 1 : -1);
    }

    /**
     * 生成字段模板实例
     * @param templateItem 字段模板
     */
    generateItem(templateItem: TemplateItem): ItemBase {
        switch (templateItem.editType) {
            case EditType.TEXT:
                return new ItemText(templateItem);
            case EditType.SELECT:
                return new ItemSelect(templateItem);
            case EditType.RADIO:
                return new ItemRadio(templateItem);
            case EditType.CHECKBOX:
                return new ItemCheckBox(templateItem);
            case EditType.TEXTAREA:
                return new ItemTextArea(templateItem);
            case EditType.SEARCH:
                return new ItemSearch(templateItem);
            case EditType.DATE:
                return new ItemDate(templateItem);
            default:
                return new ItemText(templateItem);
        }

    }
}
