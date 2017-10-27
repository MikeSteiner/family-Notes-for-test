import { Injectable } from '@angular/core';

@Injectable()
export class AllTypesHelper {

    constructor(){
    }

    /**
     * Check if input is null or undefined and returns true. On all other cases, returns false.
     * @param input
     * @returns {boolean}
     */
    public static isNullOrUndefined(input: any): any {
        let isNullOrUndefined: boolean = false;

        if(input == null || input === null || input === undefined) {
            isNullOrUndefined = true;
        }

        return isNullOrUndefined;
    }

}
