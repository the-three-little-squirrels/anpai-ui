export class TpComponent implements OnInit {


}
export interface Tp {
    templateNo: string;
    templateName: string;
    type: 'Info' | 'List';
    span: number;
    attributes: TpItem[];
    groupName: string[];
    export: boolean;

}

export interface TpItem {
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
    child: TpItem[];

}
