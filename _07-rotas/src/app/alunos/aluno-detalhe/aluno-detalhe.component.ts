import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  aluno: Aluno;
  inscricao: Subscription;


  constructor(
    private alunosService: AlunosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  editarContato (){
    this.router.navigate(['/alunos', this.aluno['id'], 'editar']);
  }
  ngOnInit(): void {
   /*  this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno == null) {
          this.router.navigate(['naoEncontrado', id]);
        }
      }
    ); */

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.activatedRoute.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o obj Aluno do resolver.');
        this.aluno = info.aluno; // aparece um erro de que essa propriedade aluno não existe nesse objeto. Então utilzia a tipagem do Typescript e falar que essa propriedade aluno é do tipo Aluno.
      }
    );
    
    /* const aluno = this.activatedRoute.snapshot.data['aluno'];
    console.log(aluno);  */   
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
