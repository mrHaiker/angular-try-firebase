import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';
import { MainComponent } from './pages/main/main.component';
import { AuthComponent } from './pages/auth/auth.component';


const routes: Routes = [
  { path: 'home', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
