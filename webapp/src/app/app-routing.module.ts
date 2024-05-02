import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/screens/home/home.component';
import { AboutComponent } from './feature/screens/about/about.component';
import { ContactComponent } from './feature/screens/contact/contact.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { ForgotPasswordComponent } from './feature/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './feature/auth/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'register', component: RegisterComponent},
  // more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
