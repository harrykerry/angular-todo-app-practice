import { Routes } from '@angular/router';
import { HomePage } from './features/core/home/home.page';
import { LoginPage } from './features/auth/login/login.page';
import { RegisterPage } from './features/auth/register/register.page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomePage,  canActivate: [authGuard],  },
  { path: 'auth/login', component: LoginPage },
  { path: 'auth/register', component: RegisterPage },
  { path: '**', redirectTo: '' },
];
