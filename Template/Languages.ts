// <auto-generated>
//    This code was generated from a template.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>

module Template
{
    export class Languages
    {
        constructor (ID: int, Name: string, Code: string)
        {
    		this.id = ID;
    		this.name = Name;
    		this.code = Code;
        }
    
    	id : int;
       	name : string;
       	code : string;
       
    	resources : Resources[];
    	settings : Settings[];
    }
}
