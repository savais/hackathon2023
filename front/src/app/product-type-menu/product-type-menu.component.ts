import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-type-menu',
  templateUrl: './product-type-menu.component.html',
  styleUrls: ['./product-type-menu.component.css']
})
export class ProductTypeMenuComponent {

  @Input() parentForm!: FormGroup;
  categories!: string[];
  productFamilies!: any[];

  onValueChange(event:any) {
    if(event.value !== this.parentForm.controls['categoryValue'].value) {
      this.parentForm.controls['categoryValue'].setValue(event.value)
    }
  }
}
