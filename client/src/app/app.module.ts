import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './services/user.service';
import { TaskComponent } from './task/task.component';


const appRoutes = [
  {
    path:'',
    component: LoginComponent
  },{
    path:'tasks',
    component: TaskComponent
  },{
    path:'logout',
    component: LogoutComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
