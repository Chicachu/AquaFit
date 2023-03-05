import { Component } from '@angular/core';
import { Role } from 'src/app/types/enums/role';
import { User } from 'src/app/types/user';
import { UserUpdateService } from 'src/app/users/userUpdate.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  userIsLoggedIn = false
  // Only do this for mobile
  // numberOfMenuItems includes the menu selector 
  numberOfMenuItems = 5
  expandedMaxHeight = 45 * this.numberOfMenuItems + 2;

  constructor(private _userUpdateService: UserUpdateService) { }

  ngOnInit() {
    this.userIsLoggedIn = this._userUpdateService.isUserLoggedIn
  }

  toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0] as HTMLElement;
    if (menu.style.maxHeight === this.expandedMaxHeight + 'px') {
      menu.style.maxHeight = '45px';
    } else {
      menu.style.maxHeight = this.expandedMaxHeight + 'px';
    }
  }

  getRouterLink() {
    switch(this._userUpdateService.userRole) {
      case Role.CLIENT: return "/users/profile"
      break;
      case Role.ADMIN: return "/users/admin"
      break;
    }
    
    return ""
  }
}
