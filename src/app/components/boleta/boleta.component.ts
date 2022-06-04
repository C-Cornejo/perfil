import { Component, OnInit,Input } from '@angular/core';
import { Materia } from 'src/app/models/Materia.model';
import { P_info } from 'src/app/models/p_info.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {

  //public info:P_info = new P_info("","",new Date(),new Date(),"");
  public habilitarIzq:boolean = false;
  public habilitarDer:boolean = false;

  public estudiante_actual:Student = 
    new Student(
        new P_info("","",new Date(),new Date(),""),
        "url",
        "CC12345",
        [new Materia("Testeo II",0,0,0)]);

   @Input()
   cartilla:Array<Student>= [this.estudiante_actual];
   indice:number = 0;

  constructor() { }
 
    ngOnInit(): void {
      this.seleccionarEstudiante();
  }

  public avanzarIzq(){
    if(this.indice > 0){
      this.indice--;
      this.seleccionarEstudiante();

    }
  }
  public avanzarDer(){
    if(this.cartilla.length - 1 > this.indice){
        this.indice++;
        this.seleccionarEstudiante();
      
    }
    
  }
  public seleccionarEstudiante(){
    this.estudiante_actual = this.cartilla[this.indice];
  }
}
