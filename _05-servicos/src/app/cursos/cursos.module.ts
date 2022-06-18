import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //no módulo raiz (AppModule) se usa o BrowserModule. Em módulo de funcionalidade (este módulo) se usa o CommonModule


import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  //providers: [CursosService] //significa que a instancia do CursoService vai estar disponivel para toda aplicaçao

})
export class CursosModule { }
