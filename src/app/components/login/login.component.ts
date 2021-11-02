import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  onLogin() {
    if (!this.loginForm.valid) {
      console.log("please check values");
    }
    else {
      this.firebaseService.loginWithEmailPass(this.loginForm.value).then(() => {
        // after login do something        
      });
    }
  }

  onGoogleLogin() {
    this.firebaseService.loginWithGoogle().then(() => {
      // after login do something
    });
  }

}
