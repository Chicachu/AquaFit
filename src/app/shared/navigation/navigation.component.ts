import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // Only do this for mobile
  // numberOfMenuItems includes the menu selector 
  numberOfMenuItems = 5
  expandedMaxHeight = 45 * this.numberOfMenuItems + 2;
  toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0] as HTMLElement;
    if (menu.style.maxHeight === this.expandedMaxHeight + 'px') {
      menu.style.maxHeight = '45px';
    } else {
      menu.style.maxHeight = this.expandedMaxHeight + 'px';
    }
  }
}
