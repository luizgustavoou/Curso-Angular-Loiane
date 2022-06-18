import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appFundoAmarelo]' //quer que seja aplicado somente ao button
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow'); //de acordo com as boas práticas.
    //console.log(this._elementRef)
  }

}
