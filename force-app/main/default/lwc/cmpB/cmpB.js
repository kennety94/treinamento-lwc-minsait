import { LightningElement, api, wire } from "lwc";
import { subscribe, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/myMessageChannel__c';


export default class CmpB extends LightningElement {

    subscription = null;
	
    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            MY_MESSAGE_CHANNEL,
            () => this.handleMessage()
        );
    }

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    handleMessage(){
        alert('Recebeu a mensagem do componente A');
    }
}