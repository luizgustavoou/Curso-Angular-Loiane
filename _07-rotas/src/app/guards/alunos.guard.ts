import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
}
)
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        //console.log(route);
        //console.log(state);
        console.log('AlunosGuard: Guarda de rota filha.')
        
        if (state.url.includes('editar')) { //se tiver editar...
            //alert('Usuário sem acesso.');
            //return false;
            //return of(false);
            
        }
        return true;
    }
}