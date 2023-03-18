import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { ResponseType } from 'src/environments/constants';
import { Class } from '../../../types/class';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classId: string
  class: Class
  date: Date

  constructor(private _router: Router, private _route: ActivatedRoute, private _adminService: AdminService, private _sharedService: SharedService) {
    this.classId = this._route.snapshot.params['classId'];
    this.date = new Date()
    this.date.setDate(this._route.snapshot.params['day'])
    this.date.setMonth(this._route.snapshot.params['month'])
    this.date.setFullYear(this._route.snapshot.params['year'])
  }

  ngOnInit() {
    if (!this.class) {
      this.getClass()
    }
  }

  getClass() {
    this._adminService.getClass(this.classId, this.date.getDate(), this.date.getMonth(), this.date.getFullYear()).subscribe({
      next: (rsp) => {
        this.class = rsp
      }, 
      error: ({error}) => {
        this._sharedService.showResponse(ResponseType.ERROR, `Could not get class information for ${this.date}`)
      }
    })
  }

  cancelClass() {

  }

  ngOnDestroy() {
    localStorage.clear()
  }
}
