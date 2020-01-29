/* eslint-disable no-console */
import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LWC_invoke_By_Quick_Action extends NavigationMixin(LightningElement) {

    @api recordId;
    connectedCallback() {
        this.navigateToNewRecordPage();
        console.log('test======>',this.recordId);
    }
    navigateToNewRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
               // "recordId":"0010o00002cNasdAAC",
                "objectApiName": "Contact",
                "actionName": "new"
             },
            state : {
               // nooverride: '1',
                defaultFieldValues : "LastName = manish,FirstName= nagar,"
            }
        });
    }

}