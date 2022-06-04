import { Component, Input, OnInit } from '@angular/core';
import { P_info } from 'src/app/models/p_info.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor() { }
  @Input()
  public info:P_info = new P_info("","",new Date(),new Date(),"");

  ngOnInit(): void {
  }


}
