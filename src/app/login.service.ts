import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, switchMap } from 'rxjs/operators';
import {auth } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {}

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    }));
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    }));



   login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      const loggedIn = user.additionalUserInfo.profile[0];
      console.log(loggedIn);   });
    this.router.navigate(['home']);
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
