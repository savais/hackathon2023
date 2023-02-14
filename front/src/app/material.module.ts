import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        MatChipsModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule
    ],
    exports: [
        MatChipsModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule
    ]
})

export class MaterialModule{}