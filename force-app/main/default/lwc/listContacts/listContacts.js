import { LightningElement, wire } from "lwc";
import getContacts from '@salesforce/apex/ContactController.getContacts';

const columns = [
    { label: 'Nome', fieldName: 'nome' },
    { label: 'Sobrenome', fieldName: 'sobrenome' },
    { label: 'Telefone', fieldName: 'telefone' },
    { label: 'Email', fieldName: 'email' },
];

export default class ListContacts extends LightningElement {

    columns = columns;

    @wire(getContacts)
    contacts;
    
}