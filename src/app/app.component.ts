import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'documentManager';

  constructor(private firebaseService: FirebaseService, public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void { // lifecycle hook
    this.firebaseService.user.subscribe((value) => {
      // do something on user logged in or else logout
    });

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        this.router.navigate(['home']);
      }
      else {
        console.log("user is logged out");
        this.router.navigate(['login']);
      }
    })
  }
}
