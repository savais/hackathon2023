import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';
import { FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class LoginModule  { }
