// <auto-generated>
//    This code was generated from a template.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>

module Template
{
    export class Doctors
    {
        constructor (ID: int, OrdinationID: int, FirstName: string, LastName: string, Title: string, Email: string, Archived: bool)
        {
    		this.id = ID;
    		this.ordinationid = OrdinationID;
    		this.firstname = FirstName;
    		this.lastname = LastName;
    		this.title = Title;
    		this.email = Email;
    		this.archived = Archived;
        }
    
    	id : int;
    	ordinationid : int;
    	firstname : string;
    	lastname : string;
    	title : string;
    	email : string;
    	archived : bool;
    
    	ordinations : Ordinations[];
    	works : Works[];
    }
}