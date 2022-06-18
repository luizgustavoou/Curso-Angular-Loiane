import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('AuthGuard.');


    return this.VerificarAcecsso();
    //throw new Error('Method not implemented.');
  }

  private VerificarAcecsso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
      
    }

    window.alert('Não pode acessar, será redirecionado para o login!!');

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo.');

    return this.VerificarAcecsso();
  }
  
}
