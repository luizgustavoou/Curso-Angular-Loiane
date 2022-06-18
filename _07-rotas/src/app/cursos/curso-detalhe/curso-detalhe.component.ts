import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute, //classe, dentre outras funçoes, poder obter os detalhes da rota, como exemplo os parametros da rota
    private cursosService: CursosService, 
    private router: Router //classe responsável pelos métodos que conseguem fazer um redirecionamento
    ) {
    //this.id = this.route.snapshot.params['id']; //o objeto com parametros é dinamico, e o id nem sempre vai ser um atributo desse objeti
    /* this.route.params.forEach( obj => {
      console.log(obj['id'])
    }) */
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);
        
        if (this.curso == null) {
          this.router.navigate(['/cursos/naoEncontrado', this.id]);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
