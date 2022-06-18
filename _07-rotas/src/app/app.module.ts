import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    //CursosModule,
    //AlunosModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
