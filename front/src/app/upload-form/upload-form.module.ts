import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFormComponent } from './upload-form.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UploadFormComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  exports: [
    UploadFormComponent
  ]
})
export class UploadFormModule { }
