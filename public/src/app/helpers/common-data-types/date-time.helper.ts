import { Injectable } from '@angular/core';

// Project imports
import { AllTypesHelper } from "./all-types.helper";

@Injectable()
export class DateTimeHelper extends AllTypesHelper {

    constructor(){
        super();
    }

    public static addDays(date: Date, daysToAdd?: number): Date {

        let dateToReturn: Date = new Date(date.getTime());

        if(this.isNullOrUndefined(dateToReturn)){
            throw new Error('addDaysLocal can not add days to nullable input date parameter');
        }
        if(this.isNullOrUndefined(daysToAdd)) {
            daysToAdd = 0;
        }

        dateToReturn.setDate(dateToReturn.getDate() + daysToAdd);

        return dateToReturn;
    }


    compareTwoDates(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        // const hours = Math.abs(a - b) / 36e5;
        const hours = a.getHours() - b.getHours();
        const hoursShort = hours.toString().substring(0, hours.toString().indexOf('.'));
        return hours;
    }

}
