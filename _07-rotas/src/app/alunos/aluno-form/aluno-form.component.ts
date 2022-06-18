import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/Iform-candeactivate';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  inscricao: Subscription;
  aluno: any;
  formMudou: boolean = false;

  constructor(
    private alunosService: AlunosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRouter.params.subscribe(
      (params: any) => {
        let id = params['id'];
        
        this.aluno = this.alunosService.getAluno(id);
        
        if (this.aluno === null) {
          this.aluno = {};
        }

      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou')
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página');

    }

    return true;
  }

  podeDesativar() {
      return this.podeMudarRota();
  }

}
