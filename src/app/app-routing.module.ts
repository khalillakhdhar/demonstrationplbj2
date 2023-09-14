import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
