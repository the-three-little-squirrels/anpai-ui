
export class ItemBase {
    sortNo: number;
    id: string;
    name: string;
    type: 'String' | 'Double' | 'Integer' | 'Info' | 'List';
    defaultValue: string;
    datePattern: string;
    pattern: string;
    max: number;
    min: number;
    suffix: string;
    codeId: string;
    itemId: string[];
    itemName: string[];
    htmlStyle: any;
    alignType: 'Left' | 'Center' | 'Right';
    editType: 'Text' | 'Select' | 'Radio' | 'CheckBox' | 'TextArea'
        | 'Date' | 'Search' | 'SingleWithDirTree' | 'SingleTree' | 'MultipleWithDirTree' | 'MultipleTree' | 'Cascader';
    length: number;
    scale: number;
    isVisible: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isSorted: boolean;
    isFilter: boolean;
    filterType: string[];
    groupIndex: number;
    span: number;
    child: ItemBase[];
    constructor(item: {
        sortNo: number;
        id: string;
        name: string;
        type: 'String' | 'Double' | 'Integer' | 'Info' | 'List';
        defaultValue: string;
        datePattern: string;
        pattern: string;
        max: number;
        min: number;
        suffix: string;
        codeId: string;
        itemId: string[];
        itemName: string[];
        htmlStyle: any;
        alignType: 'Left' | 'Center' | 'Right';
        editType: 'Text' | 'Select' | 'Radio' | 'CheckBox' | 'TextArea'
        | 'Date' | 'Search' | 'SingleWithDirTree' | 'SingleTree' | 'MultipleWithDirTree' | 'MultipleTree' | 'Cascader';
        length: number;
        scale: number;
        isVisible: boolean;
        isReadOnly: boolean;
        isRequired: boolean;
        isSorted: boolean;
        isFilter: boolean;
        filterType: string[];
        groupIndex: number;
        span: number;
        child: ItemBase[];
    }) {
        if (item) {
            this.sortNo = item.sortNo;
            this.id = item.id;
            this.name = item.name;
            this.type = item.type;
            this.defaultValue = item.defaultValue;
            this.datePattern = item.datePattern;
            this.pattern = item.pattern;
            this.max = item.max ? item.max : Infinity;
            this.min = item.min ? item.min : -Infinity;
            this.suffix = item.suffix;
            this.codeId = item.codeId;
            this.itemId = item.itemId;
            this.itemName = item.itemName;
            this.htmlStyle = item.htmlStyle;
            this.alignType = item.alignType;
            this.editType = item.editType;
            this.length = item.length;
            this.scale = item.scale;
            this.isVisible = item.isVisible;
            this.isReadOnly = item.isReadOnly;
            this.isRequired = item.isRequired;
            this.isSorted = item.isSorted;
            this.isFilter = item.isFilter;
            this.filterType = item.filterType;
            this.groupIndex = item.groupIndex;
            this.span = item.span;
            this.child = item.child;
        }
    }
}
