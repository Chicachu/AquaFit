import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClassesComponent } from './admin/classes/classes.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersContainerComponent } from './users-container.component';

const routes: Routes = [
  { 
    path: 'users', component: UsersContainerComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'admin/classes/:classId', component: ClassesComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
