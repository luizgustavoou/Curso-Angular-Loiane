import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //no módulo raiz (AppModule) se usa o BrowserModule. Em módulo de funcionalidade (este módulo) se usa o CommonModule


import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent]//,
  //providers: [CursosService] //significa que a instancia do CursoService vai estar disponivel para toda aplicaçao

})
export class CriarCursoModule { }
