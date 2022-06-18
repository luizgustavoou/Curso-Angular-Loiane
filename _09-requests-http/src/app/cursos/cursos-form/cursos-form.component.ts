import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CursosService } from '../cursos.service';
import {Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Curso } from '../curso';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: Cursos2Service,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    /* let registro = null; */

    /* this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const curso$ = this.service.loadByID(id);
        curso$.subscribe(curso => {
          registro = curso;
          this.updateForm(curso);
        });
      }
    ); */    
    
    // console.log(registro);

    /* this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadByID(id))
    )
    .subscribe(curso => this.updateForm(curso)); */


   /* Feito por mim, Luiz Gustavo..
    this.route.data.subscribe(
      (info: {curso: Curso}) => {
        console.log(info.curso);
      }
    ); */

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

  }

  /* updateForm(curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });
  } */

  hasError(field: string) {
    return this.form.get(field).errors
  }
  
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      let msgSucess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar curso, tente novamente!';
      if (this.form.value.id) {
        msgSucess = 'Curso atualizado com sucesso!';
        msgError = 'Erro ao atualizar curso, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        sucess => {
          this.modal.showAlertSucess(msgSucess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError)
      );

      /* if (this.form.value.id) {
        //update
        this.service.update(this.form.value)
          .subscribe(
            sucess => {
              this.modal.showAlertSucess('Curso atualizado com sucesso.');
              this.location.back();
            },
            error => this.modal.showAlertDanger('Erro ao atualizar curso, tente novamente!'),
            () => console.log('update completo')
          );
      }else {
        //create
        this.service.create(this.form.value).subscribe(
          sucess => {
            this.modal.showAlertSucess('Curso criado com sucesso.');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente!'),
          () => console.log('request completo')
        );
      } */

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();

  }
}
