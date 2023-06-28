import { Component } from '@angular/core';
import { TestTokenService } from './services/test-token.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {

  response = "";
  isLoading = true;

  constructor(private tokenService:TestTokenService){
    tokenService.testToken().subscribe(
      (data:any)=>{
        this.isLoading=false;
        this.response = data.message;
      },
      (err)=>{
        this.isLoading=false;
        this.response=err;
      }
    )
  }

}
