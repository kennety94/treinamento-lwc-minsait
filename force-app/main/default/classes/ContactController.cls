public with sharing class ContactController {

    public class wrapperContact {
        @AuraEnabled public String nome            {get;set;}
        @AuraEnabled public String sobrenome       {get;set;}
        @AuraEnabled public String telefone        {get;set;}
        @AuraEnabled public String email           {get;set;}
    }


    @AuraEnabled
    public static void insertContact(String nome, String sobrenome, String telefone, String email){
        Contact novoContato = new Contact();
        novoContato.FirstName = nome;
        novoContato.LastName = sobrenome;
        novoContato.Phone = telefone;
        novoContato.Email = email;

        insert novoContato;
    }


    @AuraEnabled(cacheable=true)
    public static List<wrapperContact> getContacts(){
        List<Contact> lst = [
            SELECT Id, FirstName, LastName, Phone, Email
            FROM Contact
            LIMIT 30
        ];

        List<wrapperContact> lstwp = new List<wrapperContact>();

        for (Contact c : lst) {
            wrapperContact wp = new wrapperContact();
            wp.nome = c.FirstName;
            wp.sobrenome = c.LastName;
            wp.telefone = c.Phone;
            wp.email = c.Email;

            lstwp.add(wp);
        }

        return lstwp;
    }
}