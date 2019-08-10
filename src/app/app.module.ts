import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/dashboard/home.component';
import { GroupMessengerComponent } from './component/group-messenger/group-messenger.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProjectManagerComponent } from './component/project-manager/project-manager.component';
import { TaskManagerComponent } from './component/task-manager/task-manager.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupMessengerComponent,
    AboutUsComponent,
    ProjectManagerComponent,
    TaskManagerComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
