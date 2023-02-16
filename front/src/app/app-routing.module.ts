import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

const routes: Routes = [
  {path:"", component: MenuComponent},
  {path:"upload-form", component: UploadFormComponent},
  {path:"login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
