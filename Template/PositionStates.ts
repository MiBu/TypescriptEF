// <auto-generated>
//    This code was generated from a template.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>

module Template
{
    export class PositionStates
    {
        constructor (ID: int, Name: string, OrganizationID: int, Archived: bool)
        {
    		this.id = ID;
    		this.name = Name;
    		this.organizationid = OrganizationID;
    		this.archived = Archived;
        }
    
    	id : int;
       	name : string;
       	organizationid : int;
       	archived : var;
       
    	organizations : Organizations[];
    	workspositions : WorksPositions[];
    }
}
