import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
	
    message = 'Essa mensagem vai para o componente pai';

    handleClick(){
        const evt = new CustomEvent('customclick', {
            detail: { message: this.message}
        })

        this.dispatchEvent(evt);
    }

}