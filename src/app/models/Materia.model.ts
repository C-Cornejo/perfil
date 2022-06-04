export class Materia{

    public nombre:string;
    public test1:number;
    public test2:number;
    public test3:number;
    public avg:number;
    public aprobado:boolean = false;

    constructor(nombre:string,test1:number,test2:number,test3:number){
        this.nombre = nombre;
        this.test1 = test1;
        this.test2 = test2;
        this.test3 = test3;
        this.avg = this.calcularAvg();
        if(this.avg > 5.9){
            this.aprobado = true;
        }
    }

    public calcularAvg(){
        return (this.test1 +this.test2 +this.test3)/3;
    }
}