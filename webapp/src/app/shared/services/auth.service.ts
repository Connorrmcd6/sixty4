import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import { UserInfo } from './user-info';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  userInfoData: any; // Save logged-in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data and userInfoData in local storage when
       logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));

      if (user) {
        this.afs
          .doc(`user-info/${user.uid}`)
          .valueChanges()
          .subscribe((userInfo) => {
            this.userInfoData = userInfo;
            localStorage.setItem('userInfo', JSON.stringify(this.userInfoData));
          });
      } else {
        localStorage.removeItem('userInfo');
      }
    });
  }



  // Sign in with email/password
  SignIn(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.SetUserData(result.user);
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.router.navigate(['portal']);
            }
            resolve();
          });
        })
        .catch((error) => {
          window.alert(error.message);
          reject(error);
        });
    });
  }


  // Sign up with email/password
  SignUp(email: string, password: string, userName: string, userSurname: string, userRole: number[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log('sending verification email');
          this.SendVerificationMail();
          console.log('setting user data');
          this.SetUserData(result.user);
          console.log('setting user info data');
          this.SetUserInfoData(result.user, userName, userSurname, userRole);
          if (result != null) {
            console.log('user id', result.user?.uid);
          }
          resolve();
        })
        .catch((error) => {
          window.alert(error.message);
          reject(error);
        });
    });
  }


  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  //create user info record linked to auth uid
  SetUserInfoData(user: any, userName: string, userSurname: string, userRole: number[]) {
    const userInfoRef: AngularFirestoreDocument<UserInfo> = this.afs.doc(`user-info/${user.uid}`);
    const userInfoData: UserInfo = {
      uid: user.uid,
      userName: userName,
      userSurname: userSurname,
      userRole: userRole,
    };
    return userInfoRef.set(userInfoData, { merge: true });
  }



  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }



  // create auth state change listener
  authStateChange() {
    return this.afAuth.authState;
  }
}