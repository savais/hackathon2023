import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-type-menu',
  templateUrl: './product-type-menu.component.html',
  styleUrls: ['./product-type-menu.component.css']
})
export class ProductTypeMenuComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  @Input() productTypes!: any[];


  async onValueChange(event:any) {
    if(event.value !== this.parentForm.controls['productType'].value) {
      this.parentForm.controls['productType'].setValue(event.value)
    }

    // if(event.value !== this.parentForm.controls['productFamily'].value) {
    //   let data = await (await fetch("localhost:3000/product-families/"+event.value)).json()
    //   this.productTypes = data.productTypes
    //   console.log(data)
    // }
  }

  async ngOnInit(): Promise<void> {
  }
}
