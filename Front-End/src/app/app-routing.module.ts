import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPswComponent } from './components/forgot-psw/forgot-psw.component';

// Guard
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: LoginComponent },
  { path: 'registrazione',  component: RegistrationComponent },
  { path: 'passwordDimenticata',  component: ForgotPswComponent },
  { path: 'editor', canActivate: [AuthenticationGuard], component: EditorContainerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
