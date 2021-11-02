import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { LoginCredentials } from '../models/LoginCreds';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user = new BehaviorSubject(null);

  constructor(public auth: AngularFireAuth) { }

  async loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
      console.log("user successfilly logged in using google : ", res);
    }).catch(err => {
      console.log(err);
    });
  }

  async loginWithEmailPass(data: LoginCredentials) {
    this.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  async logout() {
    this.auth.signOut();
  }

}
