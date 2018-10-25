import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';


import 'firebase/auth';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

import { AngularFireModule  } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CordovaLoginService } from '../services/auth/cordova-login.service';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  // signInFlow: (!window['cordova']) ? 'popup' : 'redirect',
  // signInFlow: (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1) ? 'redirect' : 'popup',
  signInFlow: 'popup',

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
   ,
    // {
    //   scopes: [
    //     'public_profile',
    //     'email',
    //   ],
    //   customParameters: {
    //     'auth_type': 'reauthenticate'
    //   }
    //   , provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    // }
    // ,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // {
    //   requireDisplayName: false,
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    // },
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://www.schmack.me/official/tos',
  privacyPolicyUrl: 'https://www.schmack.me/official/privacypolicy',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'Schmack PWA'),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features

    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    FirebaseUIModule,
  ],
  declarations: []
})
export class FirebaseModule { }
