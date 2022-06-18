import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService] //caso vc queira uma instancia separada somente para aaquele componente declara dentro do providers
  
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;
  
  constructor(private cursosService: CursosService) { //_cursosService: CursosService //private cursosService: CursosService
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos(); //No mundo real não queremos fazer essa instância manualmente. 
    //a injeção de dependência vai criar essa instância automaticmaente
    CursosService.criouNovoCurso.subscribe(
      curso => {
        this.cursos.push(curso)
      }
    );
  }


}
