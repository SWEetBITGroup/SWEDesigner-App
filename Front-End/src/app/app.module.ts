import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { AppRoutingModule } from './app-routing.module';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { ModPswComponent } from './components/editor-container/components/menu/components/profilo/components/mod-psw/mod-psw.component';
import { ModEmailComponent } from './components/editor-container/components/menu/components/profilo/components/mod-email/mod-email.component';

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
    ModPswComponent,
    ModEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }