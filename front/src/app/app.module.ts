import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { ListitemComponent } from './listitem/listitem.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PacketListComponent } from './packet-list/packet-list.component';
import { PacketComponent } from './packet/packet.component';


@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PacketListComponent,
    PacketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
