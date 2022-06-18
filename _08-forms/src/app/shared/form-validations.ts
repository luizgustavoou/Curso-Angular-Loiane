import { FormArray, FormControl, FormGroup, MinValidator } from "@angular/forms";

export class FormValidations {
    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: FormArray) => {
          
          /* const values = formArray.controls;
          let totalChecked = 0;
          for (let i=0; i<values.length; i++) {
            if (values[i].value) {
              totalChecked += 1;
            }
          } */
          let totalChecked = formArray.controls
            .map(v => v.value)
            .reduce((total, current) => current ? total + current : total, 0);
    
          return totalChecked >= min ? null : { minChecked: {
            checked: totalChecked,
            min: min
          }};
        };
    
        return validator;
        
    }

    static cepValidator(control: FormControl) {
      const cep = control.value;
      if (cep && cep !== '') {
       const validacep = /^[0-9]{5}-[0-9]{3}$/;
       return validacep.test(cep) ? null : { cepInvalido : true }
      }
      
      return null;
    }

    static equalsTo(otherField: string) {
      const validator = (formControl: FormControl) => {
        if (otherField == null) {
          throw new Error('É necessário informar um campo');
        }

        if (!formControl.root || !(<FormGroup>formControl.root).controls) {
          return null
        }

        const field = (<FormGroup>formControl.root).get(otherField);
        
        if (!field) {
          throw new Error('É necessário informar um campo válido.');
        }

        if (field.value !== formControl.value) {
          return { equalsTo : otherField}
        }

        return null;
      };

      return validator;
    }

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
      const config = {
        'required': `${fieldName} é obrigatório.`,
        'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres. Você digitou ${validatorValue.actualLength} caracteres`,
        'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres. Você digitou ${validatorValue.actualLength} caracteres`,
        'cepInvalido': 'CEP inválido.',
        'minChecked': `Precisa ter no mínimo ${validatorValue.min} framework(s). Você preencheu ${validatorValue.checked}`
      };

      return config[validatorName];
    }

}

