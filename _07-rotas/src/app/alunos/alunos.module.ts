import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosRoutingModule } from "./alunos-routing.module";
import { AlunosComponent } from "./alunos.component";






@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunoDetalheComponent,
        AlunosComponent,
        AlunoFormComponent
    ],
    providers: []
})

export class AlunosModule { }

