import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms: Hone your skills by learning classic data structures and algorithms in JavaScript, 2nd Edition',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(curso: string) {
    this.livros.push(curso)
    console.log(this.livros);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter( (v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }


  //PIPE ASYNC (ASSÍNCRONO) serve para conseguir fazer a saída de um valor num template, mesmo que o valor a ser atribuído demore um pouquinho. É útil quando precisamos buscar valores no servidor, já que pra fazer uma chamada AJAX no servidor, demora uns segundos para que o valor demore a ser retornado, com isso não obtém erro no template.

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  }); //reject para caso a promessa não dê certo



 /*  valorAsync2 = new Observable((observer) => {
    setTimeout(() => {
        observer.next('Valor assíncrono 2');
    }, 2000);
  }); */

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2')); //Da pra fazer com Observable também. Eles fazem parte de uma API rjxs, que é uma das implmentações do React X. Permite fazer programação por fluxo, reativa no Angular 2.

  constructor() { }

  ngOnInit(): void {
  }


}
