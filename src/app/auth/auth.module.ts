import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthFormComponent]
})
export class AuthModule { }
