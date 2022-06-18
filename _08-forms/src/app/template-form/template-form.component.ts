import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };


  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {

  }

  onSubmit(formulario: NgForm) {
    console.log(formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(
        dados => {
          console.log(dados)
          formulario.form.reset();
        },
        error => console.log(`Error caught at Subscriber ${error}`),
        () => console.log("Processing Complete.")
        );

    //console.log(this.usuario);
  }


  verificaValidTouched(campo) {
    return campo.valid && campo.touched;
  }

  verificaInvalidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-valid': this.verificaValidTouched(campo),
      'is-invalid': this.verificaInvalidTouched(campo)
    }

  }

  consultaCEP(cep, form: NgForm) {
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe( dados => this.populaDadosForm(dados, form));;
    }

  }

  populaDadosForm(dados, formulario: NgForm) {
    console.log(formulario);
    /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairo: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }); */

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairo: null,
        cidade: null,
        estado: null
      }
    });
  }
}
