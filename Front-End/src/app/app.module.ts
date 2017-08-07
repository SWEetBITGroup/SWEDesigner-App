import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/editor-container/components/menu/menu.component';
import { FileComponent } from './components/editor-container/components/menu/components/file/file.component';
import { ProfiloComponent } from './components/editor-container/components/menu/components/profilo/profilo.component';
import { ProgettoComponent } from './components/editor-container/components/menu/components/progetto/progetto.component';
import { ModificaComponent } from './components/editor-container/components/menu/components/modifica/modifica.component';
import { TemplateComponent } from './components/editor-container/components/menu/components/template/template.component';
import { LayerComponent } from './components/editor-container/components/menu/components/layer/layer.component';
import { ToolbarComponent } from './components/editor-container/components/editor/components/toolbar/toolbar.component';
import { EditorComponent } from './components/editor-container/components/editor/editor.component';
import { ActivityFrameComponent } from './components/editor-container/components/activity-frame/activity-frame.component';
import { ClassMenuComponent } from './components/editor-container/components/editor/components/class-menu/class-menu.component';
import { ActivityMenuComponent } from './components/editor-container/components/editor/components/activity-menu/activity-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { ForgotPswComponent } from './components/forgot-psw/forgot-psw.component';
import { ManageProfileComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/manage-profile.component';
import { EditPswComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/components/edit-psw/edit-psw.component';
import { EditEmailComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/components/edit-email/edit-email.component';
import { EraseProfileComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/components/erase-profile/erase-profile.component';
import { ProjListComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/components/proj-list/proj-list.component';

// Services
import { AccountService } from './services/account.service';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Guard
import { AuthenticationGuard } from './guards/authentication.guard';
import { EditUsernameComponent } from './components/editor-container/components/menu/components/profilo/components/manage-profile/components/edit-username/edit-username.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FileComponent,
    ProfiloComponent,
    ProgettoComponent,
    ModificaComponent,
    TemplateComponent,
    LayerComponent,
    ToolbarComponent,
    EditorComponent,
    ActivityFrameComponent,
    ClassMenuComponent,
    ActivityMenuComponent,
    LoginComponent,
    RegistrationComponent,
    EditorContainerComponent,
    ForgotPswComponent,
    ManageProfileComponent,
    EditPswComponent,
    EditEmailComponent,
    EraseProfileComponent,
    ProjListComponent,
    EditUsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AccountService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }