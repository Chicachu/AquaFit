import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomInputType } from 'src/app/shared/components/custom-input/custom-input-type';
import { SharedService } from 'src/app/shared/shared.service';
import { Class } from 'src/app/types/class';
import { Client } from 'src/app/types/client';
import { Currency } from 'src/app/types/enums/currency';
import { DayOfWeek } from 'src/app/types/enums/dayOfWeek';
import { Location } from 'src/app/types/enums/location';
import { Meridiem } from 'src/app/types/enums/meridiem';
import { ScheduleDays } from 'src/app/types/enums/scheduleDays';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  inputType = CustomInputType
  classes: Class[]
  selectedClass: Class
  clients: Client[]
  currentClientIds: string[]
  showAddClassModal = false
  addClassForm: FormGroup
  addClassButtons = [
    { text: 'Back', event: () => { this.showAddClassModal = false } },
    { text: 'Add Class', event: this.addClass.bind(this) },
  ]

  locations = Object.values(Location)
  days = Object.values(ScheduleDays)
  hours = Array.from(Array(12).keys())
  startTimes: string[]

  constructor(private _adminService: AdminService, private _sharedService: SharedService, private _router: Router) {}

  ngOnInit(): void {
    this.getClasses()
    this.initializeAddClassForm()

    this.startTimes = this.hours.map((h) => h === 0 ? '12 ' + Meridiem.AM : h + ' ' + Meridiem.AM)
    this.startTimes = this.startTimes.concat(this.hours.map((h) => h === 0 ? '12 ' + Meridiem.PM : h + ' ' + Meridiem.PM))
  }

  getClassDisplayName(classInfo: Class): string {
    if (!classInfo) return ''
    return classInfo.classLocation + " " + classInfo.startTime.time + " " + classInfo.startTime.meridiem
  }

  getClasses() {
    this._adminService.getClasses().subscribe({
      next: (rsp) => {
        this.classes = rsp
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  getClients(classInfo: Class) {
    if (!classInfo) return

    this.selectedClass = classInfo
    this._adminService.getClients(classInfo._id).subscribe({
      next: (rsp: any) => {
        this.clients = rsp.clients
        this.currentClientIds = rsp.currentClientIds
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }
  
  isEnrolled(clientId: string): boolean {
    return this.currentClientIds.includes(clientId)
  }

  addClass() {
    let days: DayOfWeek[] = []
    if (this.addClassForm.controls['classDays'].value === ScheduleDays.MON_WED_FRI) {
      days = [DayOfWeek.MONDAY, DayOfWeek.WEDNESDAY, DayOfWeek.FRIDAY]
    } else if (this.addClassForm.controls['classDays'].value === ScheduleDays.TUE_THU) {
      days = [DayOfWeek.TUESDAY, DayOfWeek.THURSDAY]
    }
    const newClass = {
      location: this.addClassForm.controls['classLocation'].value,
      days, 
      startDate: new Date(this.addClassForm.controls['startDate'].value),
      endDate: new Date(this.addClassForm.controls['endDate'].value),
      startTime: {
        time: parseInt(this.addClassForm.controls['classStartTime'].value.split(' ')[0]),
        meridiem: this.addClassForm.controls['classStartTime'].value.split(' ')[1]
      },
      maxAttendees: parseInt(this.addClassForm.controls['maxAttendees'].value),
      prices: [
        {currency: Currency.MXN, value: this.addClassForm.controls['pricePesos'].value},
        {currency: Currency.USD, value: this.addClassForm.controls['priceDollars'].value}
      ]
    }
    this._adminService.addNewClass(newClass).subscribe({
      next: (rsp) => {
        this.showAddClassModal = false
        this._sharedService.showSuccess(`Successfully added a class at ${rsp.classLocation} - ${rsp.startTime.time} ${rsp.startTime.meridiem}, ${rsp.days}`)
        this.getClasses()
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  navigateToClassDetails(classInfo: Class): void {
    const date = new Date()
    this._router.navigate([`users/admin/classes/${classInfo._id}/${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`])
  }

  addClassModal(): void {
    console.log("resetting form")
    this.addClassForm.reset()
    this.showAddClassModal = true
  }

  initializeAddClassForm(): void {
    this.addClassForm = new FormGroup({
      classLocation: new FormControl('', [Validators.required]),
      classDays: new FormControl('', [Validators.required]),
      classStartTime: new FormControl('', [Validators.required]),
      maxAttendees: new FormControl('', [Validators.required]),
      pricePesos: new FormControl('', [Validators.required]),
      priceDollars: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }
}
