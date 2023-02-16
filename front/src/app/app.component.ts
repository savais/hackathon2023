import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fiksu paketinhallinta';

  loggedIn!: boolean 
  jwt?: string;


  constructor(private fb: FormBuilder, private appService: AppService) {
    this.loggedIn = false
  }


  ngOnInit(): void {
    this.appService.loggedIn$.subscribe(model => {
      this.loggedIn = model
      console.log(model)
    })
  }

}

export const API_URL = "http://127.0.0.1:3000";
