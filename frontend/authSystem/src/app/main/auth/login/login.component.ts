import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TOKEN } from 'src/app/shared/config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private userService:UserService){}

  userModel = {
    username: '',
    password: '',
  };

  errorMsg = '';

  private password = '';
  private username = '';
  onSubmit() {
    this.username = this.userModel.username;
    this.password = this.userModel.password;
    this.userService.login(this.username, this.password).subscribe(
      (data: string) => {
        const token = data;
        localStorage.setItem(TOKEN, token);
        this.router.navigate(['/']);
      },
      (err) => {
        this.errorMsg=err;
      }
    );
  }
}
