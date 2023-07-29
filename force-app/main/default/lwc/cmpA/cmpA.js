import { LightningElement, wire } from "lwc";
import { publish, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/myMessageChannel__c';

export default class CmpA extends LightningElement {
	@wire(MessageContext)
    messageContext;

    handleClick(){
        publish(
            this.messageContext,
            MY_MESSAGE_CHANNEL,
            {});
    }
}