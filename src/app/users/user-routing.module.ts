import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassDetailsComponent } from './admin/classes/class-details/class-details.component';
import { ClassesComponent } from './admin/classes/classes.component';
import { ClientDetailsComponent } from './admin/clients/client-details/client-details.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersContainerComponent } from './users-container.component';

const routes: Routes = [
  { 
    path: 'users', component: UsersContainerComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'admin/classes', component: ClassesComponent },
      { path: 'admin/classes/:classId/:day/:month/:year', component: ClassDetailsComponent, pathMatch: 'full' },
      { path: 'admin/cllients', component: ClientsComponent },
      { path: 'admin/clients/:clientId', component: ClientDetailsComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
