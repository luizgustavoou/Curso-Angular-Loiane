import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-content',
  templateUrl: './exemplo-ng-content.component.html',
  styleUrls: ['./exemplo-ng-content.component.css']
})
export class ExemploNgContentComponent implements OnInit {
  @Input() valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
