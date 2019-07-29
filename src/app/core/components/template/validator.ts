import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

/**
 * 交叉验证例子
 * @param control 表单
 */
export const example: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    return null;
};
// 自定义校验函数
export function lengthCheck(length: number, msg?: string): ValidatorFn {
    const mmsg = msg ? msg : '字符串长度不符合规则';
    return (control: AbstractControl): { [key: string]: any } | null => {
        const strLength = control.value.length;
        let flag = false;
        if (strLength <= length) {
            flag = true;
        }
        return flag ? { msg: mmsg } : null;
    };
}
export function scaleCheck(length: number, msg?: string): ValidatorFn {
    const mmsg = msg ? msg : '浮点数精度不符合规则';
    return (control: AbstractControl): { [key: string]: any } | null => {
        const strLength = control.value.length;
        let flag = false;
        if (strLength <= length) {
            flag = true;
        }
        return flag ? { msg: mmsg } : null;
    };
}
export function patternCheck(pattern: RegExp, msg?: string): ValidatorFn {
    const mmsg = msg ? msg : '正则表达式不符合规则';
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = pattern.test(control.value);
        return forbidden ? { msg: mmsg } : null;
    };
}
export function rangeCheck(min: number, max: number, msg?: string): ValidatorFn {
    const mmsg = msg ? msg : '范围不满足规则';
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = Number(control.value);
        let flag = false;
        if (value >= min && value <= max) {
            flag = true;
        }
        return flag ? { msg: mmsg } : null;
    };
}



