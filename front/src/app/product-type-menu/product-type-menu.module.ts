import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeMenuComponent } from './product-type-menu.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ProductTypeMenuComponent
  ],
  imports: [
    CommonModule, MaterialModule, 
  ],
  exports: [ProductTypeMenuComponent]
})
export class ProductTypeMenuModule { }
