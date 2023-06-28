import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/auth/login/login.component';
import { RegisterComponent } from './main/auth/register/register.component';
import { LogoutComponent } from './main/auth/logout/logout.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { mustBeLoggedIn } from './main/auth/guards/must-be-logged-in.guard';
import { mustBeLoggedOut } from './main/auth/guards/must-be-logged-out.guard';
import { ProtectedComponent } from './main/protected/protected.component';
import { TokenInterceptorInterceptor } from './main/auth/interceptors/token-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NotFoundComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [mustBeLoggedIn,mustBeLoggedOut,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
