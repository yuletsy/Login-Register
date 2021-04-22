
// export class RegisterComponent implements OnInit {
//   user  = {
//     name:  String,
//     lastName: String,
//     dni: Number,
//     username: String,
//     email:  String,
//     password:  String,
//   };

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }

}
