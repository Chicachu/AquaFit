import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassDetailsComponent } from './admin/classes/class-details/class-details.component';
import { ClassesComponent } from './admin/classes/classes.component';
import { ProfileDetailsComponent } from './profile/profile-details.component';
import { ClientsComponent } from './admin/clients-management/clients.component';
import { UsersContainerComponent } from './users-container.component';

const routes: Routes = [
  { 
    path: 'users', component: UsersContainerComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'admin/classes', component: ClassesComponent },
      { path: 'admin/classes/:classId/:day/:month/:year', component: ClassDetailsComponent, pathMatch: 'full' },
      { path: 'admin/clients', component: ClientsComponent },
      { path: 'admin/clients/:clientId', component: ProfileDetailsComponent, pathMatch: 'full' },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
