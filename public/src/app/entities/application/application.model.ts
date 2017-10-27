import {ApplicationProgressStatusEnum} from "./application-progress-status.enum";
import {BooleanHelper} from "../../helpers/common-data-types/boolean.helper";

export class Application {
    public id: string;
    public customerId: string;
    public basketId: string;
    public createdBy: string;
    public createdOn: Date;
    public updatedOn: Date;
    public numberDocs: number;
    public status: number;
    public contractId: string;
    public assignedTo: string;
    public dueDate: Date;
    public selected: boolean;
    public assignedToBasketOn: Date;
    public lockedBy: string;
    public lockedOn: Date;
    public processDuration: number;
    public title: string;
    public readOnly: boolean;

    constructor(
        id: string,
        customerId: string,
        basketId: string,
        createdBy: string,
        createdOn: Date,
        updatedOn: Date,
        numberDocs: number,
        status: number,
        contractId: string,
        assignedTo: string,
        dueDate: Date,
        selected: boolean,
        assignedToBasketOn: Date,
        lockedBy: string,
        lockedOn: Date,
        processDuration: number,
        title: string,
        readOnly: boolean
    ) {
        this.id = id ? id : '';
        this.customerId = customerId ? customerId : null;
        this.basketId = basketId ? basketId : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdOn = createdOn ? createdOn : null;
        this.updatedOn = updatedOn ? updatedOn : null;
        this.numberDocs = numberDocs ? numberDocs : 0;
        this.status = status ? status : ApplicationProgressStatusEnum.New;
        this.contractId = contractId ? contractId : null;
        this.assignedTo = assignedTo ? assignedTo : null;
        this.dueDate = dueDate ? dueDate : null;

        if(!BooleanHelper.isNullOrUndefined((selected))) {
            this.selected = selected;
        } else {
            this.selected = false;
        }

        this.assignedToBasketOn = assignedToBasketOn ? assignedToBasketOn : null;
        this.lockedBy = lockedBy ? lockedBy : null;
        this.lockedOn = lockedOn ? lockedOn : null;
        this.processDuration = processDuration ? processDuration : null;
        this.title = title ? title : '';

        if(!BooleanHelper.isNullOrUndefined((readOnly))) {
            this.readOnly = readOnly;
        } else {
            this.readOnly = false;
        }
    }
}
