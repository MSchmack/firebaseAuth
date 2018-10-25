import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MatDialogRef, MatSnackBar } from '@angular/material';

import { State } from './../../state/app.state';
import { Store, select } from '@ngrx/store';

import * as fromApp from './../../state';
import * as appActions from './../../state/app.actions';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public store: Store<State>,
    public dialogRef: MatDialogRef<LoginComponent>) {
      this.afAuth.authState.subscribe(resp =>  this.handleLogin(resp));
  }
  ngOnInit() {
  }

  private handleLogin(value: any): void {
    if (value) {
      this.store.dispatch(new appActions.LoadUserData);
      this.dialogRef.close();
    }
  }
}
