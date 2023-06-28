import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/auth/login/login.component';
import { RegisterComponent } from './main/auth/register/register.component';
import { LogoutComponent } from './main/auth/logout/logout.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { mustBeLoggedOut } from './main/auth/guards/must-be-logged-out.guard';
import { mustBeLoggedIn } from './main/auth/guards/must-be-logged-in.guard';
import { ProtectedComponent } from './main/protected/protected.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent,canActivate:[mustBeLoggedOut]},
  {path:"register",component:RegisterComponent,canActivate:[mustBeLoggedOut]},
  {path:"logout",component:LogoutComponent,canActivate:[mustBeLoggedIn]},
  {path:"protected",component:ProtectedComponent,canActivate:[mustBeLoggedIn]},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
