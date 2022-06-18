import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false //o valor padrão é true (Pipe Puro).
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe { //Esse PIPE IMPURO está herdando o FiltroArrayPipe, que é um Pipe Puro, com o método transform. Então quando for aplicar o Pipe, é o mesmo método a ser executado no outro Pipe.

}
