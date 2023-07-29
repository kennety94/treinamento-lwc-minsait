import { LightningElement, track } from "lwc";
import insertContact from '@salesforce/apex/ContactController.insertContact';


export default class ContactManager extends LightningElement {

    @track nome = '';
    @track telefone = '';
    @track email = '';
    @track sobrenome = '';

    atualizarNome(event) {
        this.nome = event.target.value;
    }

    atualizarSobrenome(event) {
        this.sobrenome = event.target.value;
    }

    atualizarTelefone(event) {
        this.telefone = event.target.value;
    }

    atualizarEmail(event) {
        this.email = event.target.value;
    }


    salvarContato(){
        insertContact({ nome: this.nome, sobrenome: this.sobrenome, telefone: this.telefone, email: this.email })
        .then(() =>{
            this.nome = '';
            this.sobrenome = '';
            this.telefone = '';
            this.email = '';
        })
        .catch(error =>{
            console.log('Houve um problema:', error)
        });
    }
}