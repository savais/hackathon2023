import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuListItemClickModule } from '../menu-list-item-click/menu-list-item-click.module';
import { ProductTypeMenuModule } from '../product-type-menu/product-type-menu.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuListItemClickModule,
    ProductTypeMenuModule
  ],
  exports: [
  ]
})
export class MenuModule { }
