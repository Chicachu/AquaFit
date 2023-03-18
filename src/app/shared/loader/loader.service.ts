import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;
  loadingChange: Subject<boolean> = new Subject<boolean>();

  constructor() { 
    this.loadingChange.subscribe(loading => this.loading = loading)
  }

  setLoading(loading: boolean) {
    this.loadingChange.next(loading)
  }
}