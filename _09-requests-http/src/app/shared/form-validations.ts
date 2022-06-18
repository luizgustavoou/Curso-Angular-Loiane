export class FormValidations {

    static getMsgValidation(field: string, validation: string, values ?: any) {
        const validator = {
            'required': `${field} é obrigatório.`,
            'minlength': `${field} precisa ter no mínimo ${values.requiredLength} caracteres. Foi digitado ${values.actualLength} caracteres.`,
            'maxlength': `${field} precisa ter no máximo ${values.requiredLength} caracteres. Foi digitado ${values.actualLength} caracteres.`
        };

        return validator[validation];

    }
}

