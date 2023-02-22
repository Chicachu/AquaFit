import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0] as HTMLElement;
    if (menu.style.maxHeight === '182px') {
      menu.style.maxHeight = '45px';
    } else {
      menu.style.maxHeight = '182px';
    }
  }
}
