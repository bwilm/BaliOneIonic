import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

 username = '';


  constructor(private userService: LoginService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  f(){
    this.router.navigate(['food']);
  }

}
