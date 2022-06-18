import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';


@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() field: string;
  @Input() submitted: boolean;


  constructor() { }

  ngOnInit(): void {

  }

  get errorMessage() {
    for (const error in this.control.errors) {

      if (this.control.errors.hasOwnProperty(error) && this.submitted) {
        return FormValidations.getMsgValidation(this.field, error, this.control.errors[error])
      }
    }

    return null;
  }

  

}
