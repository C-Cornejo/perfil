
export class P_info{

    public first_name:string;
    public last_name:string;
    public birth_date:Date;
    public occupation:string;
    public expiration_date:Date;

    constructor(first_name:string,last_name:string,birth_date:Date,exp_date:Date,occupation:string)
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.occupation = occupation;
        this.expiration_date = exp_date;


    }

}