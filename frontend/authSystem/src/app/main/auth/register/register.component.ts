import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TOKEN } from 'src/app/shared/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router,private userService:UserService){}

  userModel={
    username:"",
    firstName:"",
    lastName:"",
    password:"",
    rePassword:"",
    email:"",
    age:"",
  }

  errorMsg=""
  equalPasswords = false;

  private username = '';
  private firstName = '';
  private lastName = '';
  private email = '';
  private age = "";
  private password = '';
  private rePassword = '';
  validatePasswords(){
    if(this.userModel.password !== this.userModel.rePassword){
      this.equalPasswords= false;
    }else{
      this.equalPasswords=true;
    }
  }

  onSubmit(){
    this.username=this.userModel.username;
    this.firstName=this.userModel.firstName;
    this.lastName=this.userModel.lastName;
    this.email=this.userModel.email;
    this.age=this.userModel.age;
    this.password=this.userModel.password;
    this.rePassword=this.userModel.rePassword;

    this.userService.register(this.username,this.password,this.rePassword,this.email,Number(this.age),this.firstName,this.lastName).subscribe(
      (data:any)=>{
        const token = data;
        localStorage.setItem(TOKEN,token);
        this.router.navigate(['/']);
      },(err)=>{
        this.errorMsg=err;
      }
    );
  }
}
