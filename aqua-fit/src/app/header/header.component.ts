import { Component } from '@angular/core';
import { BlockInfo } from '../types/block-info'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contact: BlockInfo = {
    header: "Contact",
    description: "+52 322 103 5834",
    imagePath: "../../assets/icons/contact.png",
    href: "https://wa.me/523221035834"
  }
  schedule: BlockInfo = {
    header: "Mon - Fri",
    description: "08:00AM - 06:00PM CST",
    imagePath: "../../assets/icons/clock.png"
  }
  location: BlockInfo = {
    header: "Del Limón 1, Tabachines",
    description: "48314 Puerto Vallarta, Jal.",
    imagePath: "../../assets/icons/location.png",
    href: "https://goo.gl/maps/k44yDJVavLbm8FPE8"
  }
}
