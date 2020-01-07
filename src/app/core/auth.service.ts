import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth, firestore } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import * as firebase from 'firebase';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName: string;
  // isDriver: false;
  // hasPromotion: false;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor( private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
   }

   fbLogin() {
     const provider = new firebase.auth.FacebookAuthProvider();

     return firebase.auth().signInWithPopup(provider).then((result) => {
      const token = result.credential.providerId;
      const user = result.user;
      this.updateUserData(user);
      this.router.navigate(['home']);
     }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      this.router.navigate(['login']);
     });
   }



   googleLogin() {
     const provider = new auth.GoogleAuthProvider();
     return this.oAuthLogin(provider);
   }

   private oAuthLogin(provider) {
     return this.afAuth.auth.signInWithPopup(provider)
     .then((credential) => {
       this.updateUserData(credential.user);
     });
   }

   private updateUserData(user) {
     this.router.navigate(['home']);
     // set user data to firestore on login
     const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

     const data: User = {

      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      // isDriver: user.isDriver,
      // hasPromotion: user.hasPromotion
    };

     return userRef.set(data, {merge: true});

   }

   signOut() {
     this.afAuth.auth.signOut().then(() => {
       this.router.navigate(['login']);
     });
   }


}
