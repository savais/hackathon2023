import { Router } from '@angular/router';

export class MatMenuListItem {
    menuLinkText!: string; // tämä declaroidaan myöhemmin (katso missä!)

    constructor(private router: Router){}

    clickMenuItem(menuItem : MatMenuListItem) {
      console.log(menuItem);
      this.selectedMenu = menuItem.menuLinkText;

      if(menuItem.menuLinkText === 'AboutUs') {
        this.router.navigate(['/AboutUs'])
      }
    }
}