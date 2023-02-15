import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFormComponent } from './upload-form.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [UploadFormComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    UploadFormComponent
  ]
})
export class UploadFormModule { }
