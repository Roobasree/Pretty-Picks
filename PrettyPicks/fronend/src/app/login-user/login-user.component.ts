import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginForm : FormGroup;
  constructor(private service:UserServiceService, private fb :FormBuilder, private router:Router){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    if(this.loginForm.invalid){
      alert('Please enter a valid user information')
    }
    this.service.login(this.loginForm.value).subscribe({
      next :res=>{
        alert(res.message);
        if(res.status){
          localStorage.setItem("isLoggedIn",'true')
          this.router.navigate(['/home'])
        }
        console.log('User info: ', res.user)
      },
      error: err=>{
        alert(err.error.message || 'login failed, Please try again')
      }
    })
  }


}

