import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signForm: FormGroup;
  constructor(private Service:UserServiceService, private fb: FormBuilder, private router: Router) {
    this.signForm = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',
       [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')
       ]
      ]
    })
  }

  signup_user(){
    if (this.signForm.valid){
      this.Service.signup(this.signForm.value).subscribe((res)=>{
        console.log("signup successful",res)
      })

      this.router.navigate(['/login'])
    }
  }


}
