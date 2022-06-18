import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';


const cursosRoutes: Routes = [
  { path: '', component: CursosComponent},
  { path: ':id', component:  CursoDetalheComponent},
  { path: 'naoEncontrado/:id', component: CursoNaoEncontradoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], //utiliza-se forChild para rotas de funcionalidade, forRoot para rotas raízes.
  exports: [RouterModule]
})

export class CursosRoutingModule { }