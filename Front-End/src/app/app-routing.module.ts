import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'registration',  component: RegistrationComponent },
  { path: 'editor', component: EditorContainerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
