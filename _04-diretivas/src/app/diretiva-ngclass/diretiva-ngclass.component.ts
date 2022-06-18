import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;
  classToDiv = {};

  constructor() {
    this.classToDiv = {
      'bi-star': !this.meuFavorito,
      'bi-star-fill': this.meuFavorito
    }
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.meuFavorito = !this.meuFavorito;
  }

}
