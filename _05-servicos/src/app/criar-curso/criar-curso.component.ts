import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService] //caso vc queira uma instancia separada somente para aaquele componente declara dentro do providers
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private CursosService: CursosService) { } 

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this.CursosService.addCurso(curso);
  }

}
