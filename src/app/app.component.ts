import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Auth, authState } from '@angular/fire/auth'
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'documentManager';

  constructor(private firebaseService: FirebaseService, private fAuth: Auth) {

  }

  ngOnInit(): void { // lifecycle hook
    this.firebaseService.user.subscribe((value) => {
      // do something on user logged in or else logout
    });

    authState(this.fAuth).subscribe((user) => {
      if (user) {
        console.log("user is logged in");
      }
      else {
        console.log("user is logged out");
      }
    })
  }
}
