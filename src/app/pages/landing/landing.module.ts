import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
