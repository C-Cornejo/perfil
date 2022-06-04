import { Component } from '@angular/core';
import { Materia } from './models/Materia.model';
import { P_info } from './models/p_info.model';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfil';

  info:P_info = new P_info("","",new Date(),new Date(),"");

  //Mock Data
  public cartilla:Array<Student> = [ 
  new Student(
    new P_info("Chirstofer Alexander","Cornejo Castillo",new Date(),new Date(),"Student"),
    "url",
    "CC12345",
    [new Materia("Matematica I",8,8,8),
    new Materia("Computadoras III",5,5,5),
    new Materia("Estadistica IV",5.9,5.9,6.5)]),
    new Student(
      new P_info("Alberto ","Carrillo",new Date(),new Date(),"Student"),
      "url",
      "CC12345",
      [new Materia("Matematica I",4,7,8),
      new Materia("Computadoras III",5,5,5),
      new Materia("Estadistica IV",3.3,8.9,5.5)])
  ];
}
