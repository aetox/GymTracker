import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient){

  }

  form ={
    email:null,
    password:null
  }

  onSubmit(): void{
    console.log(this.form)
    this.http.post('http://localhost:8888/auth/login', this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
