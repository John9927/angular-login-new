import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth, public router: Router,) {

  }

  /* Sign up */
  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.isLoggedIn = true
        this.router.navigateByUrl('dashboard');
        localStorage.setItem('user', JSON.stringify(credential.user))
      }, error => {
        alert(error.message);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Code:', errorCode + 'Message:', errorMessage);
        alert(error);
      });
  }

  // Sign In
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(credential => {

      this.isLoggedIn = true
      this.router.navigateByUrl('dashboard');
      localStorage.setItem('user', JSON.stringify(credential.user))
      }, error => {
          alert(error.message);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Code: ', errorCode + 'Message:', errorMessage);
        alert(error);
      });
  }

  // Logout
  logout() {
    this.firebaseAuth.signOut().then(() => {
      this.router.navigateByUrl('login');
      localStorage.removeItem('user')
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Code:', errorCode + 'Message:', errorMessage);
      alert(error);
    });
  }

}
