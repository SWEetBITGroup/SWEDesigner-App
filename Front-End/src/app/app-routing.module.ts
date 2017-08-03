import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPswComponent } from './components/forgot-psw/forgot-psw.component';
import { ModEmailComponent } from './components/editor-container/components/menu/components/profilo/components/mod-email/mod-email.component';
import { ModPswComponent } from './components/editor-container/components/menu/components/profilo/components/mod-psw/mod-psw.component';

// Guard
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'registrazione',  component: RegistrationComponent },
  { path: 'password dimenticata',  component: ForgotPswComponent },
  { path: 'editor', canActivate: [AuthenticationGuard], component: EditorContainerComponent },
  { path: 'modifica email', canActivate: [AuthenticationGuard], component: ModEmailComponent },
  { path: 'modifica password', canActivate: [AuthenticationGuard], component: ModPswComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}