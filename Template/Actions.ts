// <auto-generated>
//    This code was generated from a template.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>

module Template
{
    export class Actions
    {
        constructor (ID: int, ParentID: Nullable<int>, Name: string, Description: string)
        {
    		this.id = ID;
    		this.parentid = ParentID;
    		this.name = Name;
    		this.description = Description;
        }
    
    	id : int;
    	parentid : Nullable<int>;
    	name : string;
    	description : string;
    
    	actions1 : Actions1[];
    	actions2 : Actions2[];
    	roles : Roles[];
    }
}