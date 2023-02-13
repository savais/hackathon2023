import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        MatDividerModule,
        MatMenuModule,
    ],
    exports: [
        MatDividerModule,
        MatMenuModule
    ]
})

export class MaterialModule{}