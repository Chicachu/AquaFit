import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupClassesComponent } from './group-classes/group-classes.component';
import { PrivateClassesComponent } from './private-classes/private-classes.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'group-classes', component: GroupClassesComponent },
  { path: 'private-classes', component: PrivateClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
