import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { ListitemComponent } from './listitem/listitem.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProductTypeMenuModule } from "./product-type-menu/product-type-menu.module";
import { HttpClientModule } from '@angular/common/http';
import { PacketListComponent } from './packet-list/packet-list.component';
import { PacketComponent } from './packet/packet.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ListitemComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        PacketListComponent,
        PacketComponent,
    UploadFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        ProductTypeMenuModule,
        HttpClientModule
    ]
})
export class AppModule { }
