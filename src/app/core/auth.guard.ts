import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService} from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private alertController: AlertController) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.user.pipe(
      take(1),
           map(user => !!user),
           tap(loggedIn => {
             if (!loggedIn) {
               console.log('access denied');
               this.router.navigate(['/login']);
               this.alertController.create({header: 'Error', message: 'Please Login First', buttons: ['OK']})
               .then(alertEl => alertEl.present());
             }
             })
         );
  }
}
