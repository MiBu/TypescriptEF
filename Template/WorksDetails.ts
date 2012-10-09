// <auto-generated>
//    This code was generated from a template.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>

module Template
{
    export class WorksDetails
    {
        constructor (ID: int, WorkID: int, WorkTypeID: Nullable<int>, Name: string, Autogenerated: Nullable<bool>, Quantity: decimal, Notes: string)
        {
    		this.id = ID;
    		this.workid = WorkID;
    		this.worktypeid = WorkTypeID;
    		this.name = Name;
    		this.autogenerated = Autogenerated;
    		this.quantity = Quantity;
    		this.notes = Notes;
        }
    
    	id : int;
    	workid : int;
    	worktypeid : Nullable<int>;
    	name : string;
    	autogenerated : Nullable<bool>;
    	quantity : decimal;
    	notes : string;
    
    	works : Works[];
    	worktypes : WorkTypes[];
    }
}
