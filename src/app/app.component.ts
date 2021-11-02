import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Auth } from '@angular/fire/auth'
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'documentManager';

  fAuth: Auth | undefined;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void { // lifecycle hook
    this.firebaseService.user.subscribe((value) => {
      // do something on user logged in or else logout
    });

    this.fAuth?.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
      }
      else {
        console.log("user is logged out");
      }
    });
  }
}
