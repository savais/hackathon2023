import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { ListitemComponent } from './listitem/listitem.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from './menu/menu.module';




@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
