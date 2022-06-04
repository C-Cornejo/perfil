import { Component, OnInit,Input } from '@angular/core';
import { Materia } from '../../models/Materia.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor() { }
  @Input()
  notas:Array<Materia> = [new Materia("Matera Test",0,0,0)];
  ngOnInit(): void {
  }
  
}
