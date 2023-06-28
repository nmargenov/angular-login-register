import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/auth/login/login.component';
import { RegisterComponent } from './main/auth/register/register.component';
import { LogoutComponent } from './main/auth/logout/logout.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
