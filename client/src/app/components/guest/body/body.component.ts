import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user/users';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user: Users;

  constructor(private dataService: DataService, private router:Router) {
    this.user = new Users();
   }

  ngOnInit(): void {
  }

  register(){
    this.dataService.registerUser(this.user).subscribe(
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

}
