import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';
import { ContentRoutingModule } from './content-routing.module';
import { GroupClassesComponent } from './group-classes/group-classes.component';
import { PrivateClassesComponent } from './private-classes/private-classes.component';
import { SplashModule } from './splash/splash.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContentComponent,
    GroupClassesComponent,
    PrivateClassesComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    RouterModule,
    SharedModule,
    SplashModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
