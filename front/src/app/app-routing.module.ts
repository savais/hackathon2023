import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

const routes: Routes = [
  {path:"", component: MenuComponent},
  {path:"upload-form", component: UploadFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
