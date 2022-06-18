import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/200/100/?1';
  quant: number = 2;

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  onMudouValor(evento: any) {
    console.log(`recebido: ${evento.novoValor}`);
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }



  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  botaoClicado(): void {
    alert('Botão clicado!');
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
