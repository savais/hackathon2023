import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  parentForm!: FormGroup;
  productFamilies!: any[];
  packets!: any[];

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  async onValueChange(event:any) {
    if(event.value !== this.parentForm.controls['productFamily'].value) {
      console.log(event)
      this.parentForm.controls['productFamily'].setValue(event.value)
    }

    if(event.value !== this.parentForm.controls['productType'].value) {
      console.log(event.value)
      this.packets = await this.menuService.getPackets(event.value)
    }
  }

  async ngOnInit(): Promise<void> {
    this.parentForm = this.fb.group({
      productFamily: new FormControl,
      productType: new FormControl
    })

    this.parentForm.controls['productFamily'].setValue(1)
    this.parentForm.controls['productType'].setValue(1)

    this.productFamilies = await this.menuService.getProductFamilies()
  }
}