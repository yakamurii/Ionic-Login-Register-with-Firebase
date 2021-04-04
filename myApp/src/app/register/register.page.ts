import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
	password: string = ""
	cpassword: string = ""

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  async register(){
    const { username, password, cpassword } = this
    if(password !== cpassword) {
			return console.error("Passwords don't match")
		}
    try{
      const res = await firebase.auth().createUserWithEmailAndPassword(username + '@gmail.com', password)
      console.log(res)
    }catch(error) {
			console.dir(error)
		}

  }

}
