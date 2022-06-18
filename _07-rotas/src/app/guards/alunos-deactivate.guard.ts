import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./Iform-candeactivate";

 
@Injectable ({
    providedIn: 'root'
})

export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> { //antes era ...<AlunoFormComponent>
        canDeactivate(
            component: IFormCanDeactivate, //antes era AlunoFormComponent
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('guarda de desativação')

            
            //return !component.formMudou;
            //return component.podeMudarRota();
            return component.podeDesativar();
;
    }
}
