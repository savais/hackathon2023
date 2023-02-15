import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { toFormData } from 'src/shared/toFormData';
import { API_URL } from '../app.component';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
 
  uploadPacket: any;
  API_URL = API_URL;
  productFamilies!: any[];
  fileName = '';

  uploadFormGroup!: FormGroup;
  progress!: number;
  signup: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  onFileSelected(event: any) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;
      }
  }

  async submit(): Promise<void> {
    console.log(this.uploadFormGroup.value)
    console.log(toFormData(this.uploadFormGroup))
    try {
      let formData = toFormData(this.uploadFormGroup.value)
      let req = new XMLHttpRequest()
      req.open("POST", "http://127.0.0.1:3000/packets")
      req.send(formData)
    } catch(err) {

    }

  }

  async ngOnInit(): Promise<void> {
    
    this.uploadFormGroup = this.fb.group({
      packetName: new FormControl,
      packetVersion: new FormControl,
      packetProductType: new FormControl,
      packetDescription: new FormControl,
      packetFile: new FormControl
    })

    try {
      let res = await fetch(`http://127.0.0.1:3000/product-families/`)
      this.productFamilies = await res.json()
    } catch (error) {
      
    }
    
  }


}
