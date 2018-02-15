import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RegformModelService} from './model/regform.model';
//students sign-up
//
import {SignUpForm} from './Student-Directive/Sign-Up-Directive/signup.component';
//student login
import {LoginPage} from './Student-Directive/Sign-In-Directive/login.component'
//company login
import {AdminLoginForm} from './Company-Directive/LoginDirective/adminlogin'
//router Module
import{RouterModule,Routes} from '@angular/router';
import {opportunityPage} from './Company-Directive/OpportunityDirective/opportunity.component'

//import{ReactiveFormsModule} from'angular/forms;
//services
import {ApiService} from './apiServices/api'
//import {TemplateForm} from './Student-Directive/Sign-Up-Directive/template.form'
import {HttpClientModule} from '@angular/common/http';



const appRoutes:Routes=[
  {path:'register',component:SignUpForm},
  {path:'login',component:LoginPage,
  {path:'opportunity',component:opportunityPage}

]




@NgModule({
  declarations: [
    AppComponent,LoginPage,AdminLoginForm,SignUpForm,opportunityPage
    //TemplateForm,


  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
    //,ReactiveFormsModule

  ],
  providers: [RegformModelService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
