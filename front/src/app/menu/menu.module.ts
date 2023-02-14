import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuListItemClickModule } from '../menu-list-item-click/menu-list-item-click.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuListItemClickModule,
  ],
  exports: [
  ]
})
export class MenuModule { }
