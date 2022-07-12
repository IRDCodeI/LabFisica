import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/user/users';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
//import { Usuario } from 'src/interfaces/userLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users;

  constructor(private dataservice:DataService, private router:Router) {
    this.user = new Users();
  }

  ngOnInit(): void {

  }

  login(){
    this.dataservice.loginUser(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.dataservice.dataUser = new Users();
    }
  }
}
