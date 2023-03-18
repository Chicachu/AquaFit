import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader = false
  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loadingChange.subscribe(loading => this.showLoader = loading)
  }
}
