import { Materia } from "./Materia.model";
import { P_info } from "./p_info.model";
export class Student{

    public info:P_info;
    public foto:string;
    public document_id:string;
    public notas:Array<Materia>;

    constructor(info:P_info,foto:string,document_id:string,notas:Array<Materia>){
        
        this.info = info;
        this.foto = foto;
        this.document_id = document_id;
        this.notas=notas;
    }
}