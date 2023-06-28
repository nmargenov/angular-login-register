import { Component } from '@angular/core';
import { UserService } from '../main/auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UserService){}

  get isLoggedIn(){
    return this.userService.isLoggedIn;
  }
  
  get username(){
    return this.userService.decodedToken?.username;
  }
}
