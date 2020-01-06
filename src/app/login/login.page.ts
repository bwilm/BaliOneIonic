import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {


isloading = true;
showing = false;
hasError = false;



  constructor(private router: Router, private alertController: AlertController, private auth: AuthService) {
   }

  ngOnInit() {
  }

}


