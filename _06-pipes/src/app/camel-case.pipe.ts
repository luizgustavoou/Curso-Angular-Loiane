import { Pipe, PipeTransform } from '@angular/core';

//Componentes, diretivas e pipes são declarados no módulo dentro de declarations para que eles fiquem disponiveis aos componentes

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
/*   Quando implmeneta a interface PipeTransform, precisamos sobrescrever o método transform dessa interface (é o metodo que vai transofrmar o vlaor em uma outra coisa para mostrar na tela, e recebe 2 parametros:
  1) valor a ser transformado;
  2)argumentos (opcionais)
*/

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = '';

    for(let v of values) {
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
