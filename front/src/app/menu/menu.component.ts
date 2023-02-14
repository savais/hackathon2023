import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories!: string[];
  parentForm!: FormGroup;
  productFamilies!: any[];

  constructor(private fb: FormBuilder) {}

  onValueChange(event:any) {
    if(event.value !== this.parentForm.controls['categoryValue'].value) {
      this.parentForm.controls['categoryValue'].setValue(event.value)
    }
  }

  async ngOnInit(): Promise<void> {
    this.parentForm = this.fb.group({
      productFamily: new FormControl,
      productType: new FormControl
    })

    try {
      let res = fetch("localhost:3000/product-families")
      console.log(JSON.stringify(res))
    } catch (error) {
      
    }
    // fetch("localhost:3000/product-families")
    // .then((response) => response.json())
    // .then((data) => {
    //   this.productFamilies = data
    //   console.log(data)
    // });
  }
}