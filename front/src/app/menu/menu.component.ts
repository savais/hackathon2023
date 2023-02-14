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

  categories!: string[];
  parentForm!: FormGroup;
  productFamilies!: any[];

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

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

    await this.menuService.getProductFamilies()
  }
}