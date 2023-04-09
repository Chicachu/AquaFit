import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomInputType } from 'src/app/shared/components/custom-input/custom-input-type';
import { SharedService } from 'src/app/shared/shared.service';
import { Client } from 'src/app/types/client';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  inputType = CustomInputType
  showAddClientModal = false
  addClientForm: FormGroup
  addClientButtons = [
    {text: 'Back', event: () => { this.showAddClientModal = false }}, 
    {text: 'Add Client', event: this.addClient.bind(this) }
  ]
  clients: Client[]

  constructor(private _adminService: AdminService, private _sharedService: SharedService, private _router: Router) {}

  ngOnInit(): void {
    this.getClients()
    this.initializeAddClientForm()
  }
  
  getClients() {
    this._adminService.getAllClients().subscribe({
      next: (rsp) => {
        console.log(rsp)
        this.clients = rsp
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  addClientModal(): void {
    this.showAddClientModal = true
  }

  initializeAddClientForm(): void {
    this.addClientForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email])
    })
  }

  addClient(): void {
    console.log(this.addClientForm)
    const newClient = {
      firstName: this.addClientForm.controls['firstName'].value,
      lastName: this.addClientForm.controls['lastName'].value,
      phoneNumber: this.addClientForm.controls['phoneNumber'].value,
      email: this.addClientForm.controls['email'].value
    }
    this._adminService.addNewClient(newClient).subscribe({
      next: (rsp) => {
        this.showAddClientModal = false
        let message = rsp.firstName
        if (rsp.lastName) {
          message += ' ' + rsp.lastName
        }
        message += ' was successfully added.'
        this._sharedService.showSuccess(message)
        this.getClients()
      }, 
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  navigateToClientDetails(client: Client): void {
    this._router.navigate([`/users/admin/clients/${client._id}`])
  }
}
