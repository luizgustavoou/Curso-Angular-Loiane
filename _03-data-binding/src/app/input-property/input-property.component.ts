import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']//,
  //inputs: ['nomeCurso:nome'] //ou pode ser como metdado
})
export class InputPropertyComponent implements OnInit {
  
  @Input('nome') nomeCurso: string = ''; //expoe uma propridade nome para o seletor app-curso
                  // internarmente é nomeCurso, e exeternamente é nome
  
 constructor() { }

  ngOnInit(): void {
  }

}
