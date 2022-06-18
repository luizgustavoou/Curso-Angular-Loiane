import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';

import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]//,
    //canActivateChild: [AlunosGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent }//canActivate: [AuthGuard]} //qualquer outra coisa digitada vai cair nesse caminho
];

//forRoott é o que nós queremos utilizar aqui, porque esse arquivo contém as rotas de toda a aplicação, são as rotas raíz da aplicação.
//A página inicial, página de login ou uma página não encontrada são rotas chaves, rotas principais da aplicação, por isso utilizamos .forRoot

//Para aplicarmos rotas de funcionalidades, por exemplo se tiver cursos e tratar isso como funciionaldiade, e nele ter curso/id, curso/editar,... para não poluir esse arquivo podemos fazer a mesma coisa dos módulos com as rotas

//Você pode mudar o valor do href para configurar um namespace para as rotas. Se colocar href/"login" não significa que irá redicionar para rota de login. É apenas o nome do namespacee. Nesse caso a app ficaria localhost:4200/login/login - caso a rota de login seja ativada. (isso no base do index.html)

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], 
  exports: [RouterModule] //para expor esse módulo
})

export class AppRoutingModule { }