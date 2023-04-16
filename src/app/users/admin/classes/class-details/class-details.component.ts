import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Client } from 'src/app/types/client';
import { Class } from '../../../../types/class';
import { AdminService } from '../../admin.service';
import { DateFilterFn } from '@angular/material/datepicker';
import { DayOfWeek } from 'src/app/types/enums/dayOfWeek';
import { CustomInputType } from 'src/app/shared/components/custom-input/custom-input-type';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {
  inputType = CustomInputType
  classId: string
  class: Class
  date: Date
  clients: Client[]
  clientNames: string[]
  addClientForm: FormGroup
  showCancelModal = false
  cancelClassButtons = [
    { text: 'Back', event: () => { this.showCancelModal = false } },
    { text: 'Yes Cancel Class', event: this.cancelClass.bind(this) },
  ]
  showAddClientToClassModal = false
  addClientToClassButtons = [
    { text: 'Back', event: () => { this.showAddClientToClassModal = false } },
    { text: 'Add Client to Class', event: this.addClientToClass.bind(this) },
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

    this.getClients()
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

  getClients() {
    this._adminService.getAllClients().subscribe({
      next: (rsp: any) => {
        this.clients = rsp
        this.clientNames = rsp.map((c: Client) => c.firstName + ' ' + c.lastName)
        this.initializeClientForm()
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  addClientToClass(): void {
    if (!this.addClientForm.valid) {
      this.addClientForm.markAllAsTouched()
    } else {
      const cliendId = this.getClientIdFromName(this.addClientForm.controls['clientToAdd'].value)
      let sessions = this.getDefaultSessions() 
      if (this.addClientForm.controls['bonusSessions'].value) {
        sessions += parseInt(this.addClientForm.controls['bonusSessions'].value)
      }
      this._adminService.addClientToClass(this.class._id, cliendId!, sessions, this.addClientForm.controls['startDate'].value).subscribe({
        next: (rsp) => {
          this.showAddClientToClassModal = false
          this._sharedService.showSuccess(`${this.addClientForm.controls['clientToAdd'].value} has been added to this class successfully!`)
          this.getClass()
        }, 
        error: ({error}) => {
          this._sharedService.showError(error.message)
        }
      })
    }
  }

  getClientIdFromName(clientFullName: string): string | undefined {
    const client = this.clients.find((c: Client) => c.firstName + ' ' + c.lastName === clientFullName)
    return client?._id
  }

  addClientToClassModal(): void {
    this.addClientForm.reset()
    this.showAddClientToClassModal = true
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

  initializeClientForm() {
    this.addClientForm = new FormGroup({
      clientToAdd: new FormControl('', [Validators.required, this.mustBeIncludedIn(this.clientNames)]),
      startDate: new FormControl('', [Validators.required]),
      bonusSessions: new FormControl('', [Validators.pattern('^[0-9]*$')])
    })
  }

  getDefaultSessions() {
    return this.class.days.length === 2 ? 8 : 12
  }

  getAddToClassText() {
    return this.class ? `Choose a client to add to ${this.class.classLocation} on ` + this.class.days.join(', ') + ` at ${this.class.startTime.time} ${this.class.startTime.meridiem}`: ''
  }

  dateFilter: DateFilterFn<Date | null> = (d: Date | null): boolean => {
    if (this.class.days && d) {
      const dayToCompare = new Date(d)
      const daysOfWeekArray = Object.values(DayOfWeek)
      const filteredDatesAsNumbers = this.class.days.map((d) => daysOfWeekArray.indexOf(d))
      return filteredDatesAsNumbers.includes(dayToCompare.getDay())
    }
    return true
  }

  mustBeIncludedIn(clients: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return clients && !clients.includes(control.value) ? {notValidClient: {value: control.value}} : null
    }
  }

  ngOnDestroy() {
    localStorage.clear()
  }
}
