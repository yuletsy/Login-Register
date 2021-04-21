import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
  user ={

    email: String,
    password: String
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){

  }

  login() {
    this.authService.loginUser(this.user)
    .subscribe(
      res =>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    )
  }
}
