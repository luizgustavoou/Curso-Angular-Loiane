import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable() //com o decorator @Injectable() falamos ao angualar que essa é uma classe injetavel (o angular conseguira instanciar essa classe)

export class CursosService {
    
    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>(); //static: ao declarar um atributo  ou um método de uma classe em estático, significa que nao precisamos da instancia da classe para acessar o mesmo. Diferente do emitirCursoCriado que somente com a instancia de uma classe CursosService que teriamos acesso a esse atributo. Quando as duas instâncias do CursosServicec forem criadas, a variável criouNovoCurso vai ser compartilhado entre as instâncias pois ela é estática.

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService) {
        console.log('CursosService')
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos.');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);

        CursosService.criouNovoCurso.emit(curso);//o acesso é semelhante ao C# e Java
    }
}