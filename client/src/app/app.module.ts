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
import { CampaingsComponent } from './campaings/campaings.component';
import { VotesComponent } from './votes/votes.component';


const appRoutes = [
  {
    path:'',
    component: LoginComponent
  },{
    path:'campaigns',
    component: CampaingsComponent
  },{
    path:'votes',
    component: VotesComponent
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
    TaskComponent,
    CampaingsComponent,
    VotesComponent
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
