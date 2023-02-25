import { Component } from '@angular/core';
import { BlockInfo } from '../types/block-info';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
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
