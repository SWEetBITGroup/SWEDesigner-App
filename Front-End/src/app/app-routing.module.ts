import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ModEmailComponent } from './components/editor-container/components/menu/components/profilo/components/mod-email/mod-email.component';
import { ModPswComponent } from './components/editor-container/components/menu/components/profilo/components/mod-psw/mod-psw.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'editor', component: EditorContainerComponent },
  { path: 'modemail', component: ModEmailComponent },
  { path: 'modpsw', component: ModPswComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
