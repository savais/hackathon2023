import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuListItemClickModule } from '../menu-list-item-click/menu-list-item-click.module';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuListItemClickModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
