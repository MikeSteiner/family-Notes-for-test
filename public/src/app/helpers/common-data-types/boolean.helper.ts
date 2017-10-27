import { Injectable } from '@angular/core';

// Project imports
import { AllTypesHelper } from "./all-types.helper";

@Injectable()
export class BooleanHelper extends AllTypesHelper {

    constructor(){
        super();
    }

    // TODO is not tested and never used
    public static isBoolean(value: any): boolean {
        let isBoolean: boolean = false;

        let isTyepBoolean: boolean = typeof(value)  === 'boolean';
        let isObjectBoolean: boolean = (typeof(value) === 'object' && typeof(value).valueOf() === 'boolean');
        if(isTyepBoolean || isObjectBoolean){
             isBoolean = <boolean>value.valueOf();
        }

        return isBoolean;
    }

}
