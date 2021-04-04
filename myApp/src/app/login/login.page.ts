import { Component, OnInit } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ""
	password: string = ""
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  async login() {
		const { username, password } = this
    try{
      const res = await firebase.auth().signInWithEmailAndPassword(username + '@gmail.com', password)
    }catch(err){
      //console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
     }
    }
  }
}
