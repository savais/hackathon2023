import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  message="Fiksu Paketinhallinta"
  @Input() loggedIn!: boolean 

  constructor() {
    this.loggedIn = false
  }

}
