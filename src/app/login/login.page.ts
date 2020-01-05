import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { RouterLink, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  
username: string = ''
userpassword: string = ''
isloading: boolean = true;
showing: boolean = false;
hasError: boolean = false;



  constructor(private router :Router, private alertController: AlertController) {
   }

  ngOnInit() {
  }


  login =()=>{
    this.isloading = true;
    const username = this.username;
    const password = this.userpassword;

    if(password && username){
      this.router.navigate(['home'])
    }else{
      this.hasError = true;
      this.alertController.create({header:'Error',message:'Incorrect Username or Password', buttons:['OK']})
      .then(alertEl => alertEl.present());
    }

}
}


