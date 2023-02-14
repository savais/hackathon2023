import { Component } from '@angular/core';
import { API_URL } from '../app.component';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
uploadPacket: any;
API_URL = API_URL;

}
