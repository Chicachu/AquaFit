import { Component, Input } from '@angular/core';
import { BlockInfo } from '../../types/block-info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() info: BlockInfo

  constructor() {}
}
