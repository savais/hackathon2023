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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFormModule } from './upload-form/upload-form.module';
import { LoginModule } from './login/login.module';
import { AppService } from './app.service';

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
    providers: [AppService],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        ProductTypeMenuModule,
        HttpClientModule,
        UploadFormModule,
        LoginModule
    ]
})
export class AppModule { }
