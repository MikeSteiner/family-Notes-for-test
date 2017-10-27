import { Injectable } from '@angular/core';

// Project imports
import {AllTypesHelper} from "./all-types.helper";

@Injectable()
export class StringHelper extends AllTypesHelper{

    constructor() {
        super();
    }

    /**
     * Check if string is Null, Undefined or empty string and returns true. On all other cases returns false.
     * @param input
     * @returns {boolean}
     */
    public static isEmpty(input: any): boolean {
        let isNullOrUndefined: boolean = StringHelper.isNullOrUndefined(input);
        let isEmpty: boolean = false;

        if(isNullOrUndefined) {
            isEmpty = true;
        } else {
            if(input === '') {
                isEmpty = true;
            }
        }

        return isEmpty;
    }

    public static setToEmptyOnCondition(stringToUpdate: string, shouldBeEmpty): string {
        if(shouldBeEmpty){
            stringToUpdate = '';
        }

        return stringToUpdate;
    }

    public static getValueFromSplittableString(input: string, splitBy: string, positionToGet?: number): string {
        let output: string;

        if(input == null){
            throw new Error('getValueFromComaSeparatedString can not extract value from nullable input string');
        }
        if(input == ''){
            throw new Error('getValueFromComaSeparatedString can not extract value from empty input string');
        }
        if(splitBy == null){
            throw new Error('getValueFromComaSeparatedString can not use nullable string for a split delimiter');
        }
        if(splitBy == ''){
            throw new Error('getValueFromComaSeparatedString can not use empty string for a split delimiter');
        }

        if(positionToGet == null){
            positionToGet = 1;
        }

        let canBeSplit = (input.indexOf(splitBy) > 0);
        if(!canBeSplit){
            output = input;
        } else {
            const splitValues: string[] = input.split(splitBy).map(
                (item: string) => {
                    return item.trim();
                });

            if(positionToGet > splitValues.length){
                throw new Error('getValueFromComaSeparatedString positionToGet value: ' + positionToGet + ' is out of range: 1 - ' + splitValues.length);
            }

            output = splitValues[positionToGet - 1];
        }

        return output;
    }

    public static convertToNumber(input: string): number {
        let output: number;
        let functionName = 'convertToNumber';

        // Error handling
        if(input == null){
            throw new Error(functionName + ' can not extract value from nullable input string');
        }
        if(input == ''){
            throw new Error(functionName + ' can not extract value from empty input string');
        }
        if(typeof(input)!== 'string'){
            throw new Error(functionName + ' input parameter ' + input + ' needs tobe of string type but is of type ' + typeof (input));
        }

        // Action
        let hasCommasAndDots = (input.indexOf('.') > 0) && (input.indexOf(',') > 0);
        if(hasCommasAndDots) {
            output = parseFloat(input.replace(' ',''));
        } else {
            output = parseFloat(input.replace(',','.').replace(' ',''));
        }

        // Error handling
        let isNumber =  typeof(output) === 'number';
        if(!isNumber) {
            throw new Error(functionName + ' can not convert input string ' + input + ' to number');
        }

        return output;
    }

    public static convertToBoolean(input: string): boolean {
        let output: boolean;
        let functionName = 'convertToBoolean';

        // Error handling
        if(input == null){
            throw new Error(functionName + ' can not extract value from nullable input string');
        }
        if(input == ''){
            throw new Error(functionName + ' can not extract value from empty input string');
        }
        if(typeof(input)!== 'string'){
            throw new Error(functionName + ' input parameter ' + input + ' needs tobe of string type but is of type ' + typeof (input));
        }

        // Action
        let hasCommasAndDots = (input.indexOf('.') > 0) && (input.indexOf(',') > 0);
        if(input.toLowerCase() === 'true' ) {
            output = true;
        } else if(input.toLowerCase() === 'yes' ) {
            output = true;
        } else if(input === '1' ) {
            output = true;
        } else if(input.toLowerCase() === 'false' ) {
            output = false;
        } else if(input.toLowerCase() === 'no' ) {
            output = false;
        } else if(input === '0' ) {
            output = false;
        }
        // Todo change last checks if necessary
        else {
            output = false;
        }

        // Error handling
        let isNumber =  typeof(output) === 'boolean';
        if(!isNumber) {
            throw new Error(functionName + ' can not convert input string ' + input + ' to boolean');
        }

        return output;
    }

    /**
     * Removes the first occurrence of firstValue and the last occurrence of lastValue in the text parameter.
     * Return the result string.
     * @param text
     * @param firstValue
     * @param lastValue
     * @returns {string}
     */
    public static removeLeadAndEndStrings(text: string, firstValue: string, lastValue: string): string {
        let output: string = '';

        let leadIx: number = text.indexOf(firstValue);
        if(leadIx === -1) {
            leadIx = 0;
        } else {
            leadIx = leadIx + firstValue.length;
        }

        let endIx = text.lastIndexOf(lastValue);
        if(endIx === -1) {
            endIx = text.length;
        }

        output = text.substring(leadIx, endIx);

        return output;
    }
}
