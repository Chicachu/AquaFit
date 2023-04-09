import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Class } from '../../../types/class';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {
  classId: string
  class: Class
  date: Date
  showCancelModal = false
  cancelClassButtons = [
    { text: 'Back', event: () => { this.showCancelModal = false } },
    { text: 'Yes Cancel Class', event: this.cancelClass.bind(this) },
  ]

  constructor(private _route: ActivatedRoute, private _adminService: AdminService, private _sharedService: SharedService) {
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
        this._sharedService.showError(`Could not get class information for ${this.date}`)
      }
    })
  }

  addClientToClass(): void {

  }

  checkInClient(clientId: string, checkIn: Event) {
    const checkInCheckbox = checkIn.target as HTMLInputElement
    this._adminService.checkInClient(clientId, this.classId, checkInCheckbox.checked, this.date.getDate(), this.date.getMonth(), this.date.getFullYear())
  }

  getCancelClassText() {
    return 'This action cannot be undone. Are you sure you want to cancel this class on ' + this._sharedService.getFormattedDayMonth(this.date) + '?'
  }

  cancelClassModal() {
    this.showCancelModal = true
  }

  cancelClass() {
    this.showCancelModal = false
    this._adminService.cancelClass(this.classId, this.date.getDate(), this.date.getMonth(), this.date.getFullYear(), true)
  }

  ngOnDestroy() {
    localStorage.clear()
  }
}
