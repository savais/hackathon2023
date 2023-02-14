import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list-item-click',
  templateUrl: './menu-list-item-click.component.html',
  styleUrls: ['./menu-list-item-click.component.css']
})
export class MenuListItemClickComponent {

  menuLinkText!: string; // tämä declaroidaan myöhemmin (katso missä!)
  selectedMenu!: string;

    constructor(private router: Router){}

    clickMenuItem(menuItem : MenuListItemClickComponent) {
      console.log(menuItem);
      this.selectedMenu = menuItem.menuLinkText;

      if(menuItem.menuLinkText === 'AboutUs') {
        this.router.navigate(['/AboutUs'])
      }
    }

}