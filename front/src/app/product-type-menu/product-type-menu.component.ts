import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-type-menu',
  templateUrl: './product-type-menu.component.html',
  styleUrls: ['./product-type-menu.component.css']
})
export class ProductTypeMenuComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  productTypes!: any[];
  productTypeIdx!: number;
  @Input() productFamilies!: any[];

  onValueChange(event:any) {
    if(event.value !== this.parentForm.controls['productType'].value) {
      this.parentForm.controls['productType'].setValue(event.value)
    }
  }

  async ngOnInit(): Promise<void> {
    
    this.parentForm.get("productFamily")?.valueChanges.subscribe(async (value) => {
      // console.log(this.productFamilies)
      this.productTypeIdx = this.productFamilies.find((x) => x.id == value)

      let res = await fetch("http://127.0.0.1:3000/product-types")
      this.productTypes = await res.json()
    })
  }
}
