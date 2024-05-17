import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/screens/home/home.component';
import { AboutComponent } from './feature/screens/about/about.component';
import { ContactComponent } from './feature/screens/contact/contact.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { ForgotPasswordComponent } from './feature/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './feature/auth/register/register.component';
import { PortalComponent } from './feature/screens/portal/portal.component';
import { DesignComponent } from './feature/screens/design/design.component';
import { PackagingComponent } from './feature/screens/packaging/packaging.component';
import { PricingComponent } from './feature/screens/pricing/pricing.component';
import { ServicesComponent } from './feature/screens/services/services.component';
import { VerifyEmailComponent } from './feature/auth/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'portal', component: PortalComponent, canActivate: [AuthGuard] },
  { path: 'design', component: DesignComponent },
  { path: 'packaging', component: PackagingComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  // more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
