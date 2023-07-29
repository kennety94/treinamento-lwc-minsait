import { LightningElement } from "lwc";

export default class ModalExp extends LightningElement {
    name = '';
    isModalOpen = false;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    showModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

}