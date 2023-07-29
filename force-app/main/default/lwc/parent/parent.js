import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
	msg = '';

    handleCustomClick(event){
        this.msg = event.detail.message;
    }
}