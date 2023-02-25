import { Component } from '@angular/core';
import { BlockInfo } from '../../../types/block-info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  infoGraphics: BlockInfo[] = [
    {
      header: "Cardio",
      description: "Enhance your heart health with various methods of cardio for any skill level.",
      imagePath: "../../../assets/icons/swimming.png"
    },
    {
      header: "Strength",
      description: "Increase your ability to do every day activities and improve metabolism.",
      imagePath: "../../../assets/icons/dumbell.png"
    },
    {
      header: "Yoga",
      description: "Develop your balance and flexibility with ancient techniques.",
      imagePath: "../../../assets/icons/lotus.png"
    },
    {
      header: "Health",
      description: "Improve your health, your energy, and your outlook on life.",
      imagePath: "../../../assets/icons/hospital.png"
    },
    {
      header: "Variety",
      description: "No two classes are the same, and every class offers all types of exercise.",
      imagePath: "../../../assets/icons/variety.png"
    }
  ]
}
