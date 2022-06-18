import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      //console.log('Formulario invalido');
      //console.log(this.formulario.controls);
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        controle.markAsTouched();
        if (controle instanceof FormGroup || controle instanceof FormArray) {

          this.verificaValidacoesForm(controle);
        }
        
      }
    );
  }

  resetar() {
    this.formulario.reset();
    //this.formulario.get('nome').setValue('Loiane');
  }

  verificaValidTouched(campo: string) {
    //this.formulario.controls[campo].valid;

    return this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaInvalidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
    return false;
  }

  aplicaCssErro(campo: string) {
    return {
      'is-valid': this.verificaValidTouched(campo),
      'is-invalid': this.verificaInvalidTouched(campo)
    }

  }

}
