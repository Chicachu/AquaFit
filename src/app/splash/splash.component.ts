import { Component } from '@angular/core';
import { BlockInfo } from '../types/block-info';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  infoGraphics: BlockInfo[] = [
    {
      header: "Cardio",
      description: "Even if you don't swim, everyone gets cardio.",
      imagePath: "../../assets/icons/swimming.png"
    },
    {
      header: "Strength",
      description: "No matter who you are, improve your strength.",
      imagePath: "../../assets/icons/dumbell.png"
    },
    {
      header: "Yoga",
      description: "Recenter yourself with relaxing yoga.",
      imagePath: "../../assets/icons/lotus.png"
    },
    {
      header: "Health",
      description: "Improve your health, your energy, and your outlook on life.",
      imagePath: "../../assets/icons/hospital.png"
    },
    {
      header: "Variety",
      description: "No two classes are the same, never get bored.",
      imagePath: "../../assets/icons/variety.png"
    }
  ]
  testimonials: BlockInfo[] = [
    {
      header: "Erica from Seattle",
      description: "The instructor is the sexiest instructor in town. Believe me, because after 1 month of classes, we got pregnant and we have a daughter now! 10/10 would recommend.",
      imagePath: "../../assets/testimonials/erica.jpg"
    },
    {
      header: "Bailey Highly Recommends",
      description: "This is the best aqua fitness exercise I have ever gotten. I don't swim well, but the instructor makes me feel so comfortable and confident! Anyone can do it!",
      imagePath: "../../assets/testimonials/Bailey.jpg"
    },
    {
      header: "Erica from Seattle",
      description: "The instructor is the sexiest instructor in town. Believe me, because after 1 month of classes, we got pregnant and we have a daughter now! 10/10 would recommend.",
      imagePath: "../../assets/testimonials/erica.jpg"
    },
    {
      header: "Bailey Highly Recommends",
      description: "This is the best aqua fitness exercise I have ever gotten. I don't swim well, but the instructor makes me feel so comfortable and confident! Anyone can do it!",
      imagePath: "../../assets/testimonials/Bailey.jpg"
    }
  ]
}
