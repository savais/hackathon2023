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
  }

  async ngOnInit(): Promise<void> {
  }
}
