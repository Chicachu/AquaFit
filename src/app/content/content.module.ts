import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SplashComponent } from './splash/splash.component'
import { RouterModule } from '@angular/router';
import { ContentRoutingModule } from './content-routing.module';
import { InfoComponent } from './splash/info/info.component';
import { GetStartedBannerComponent } from './get-started-banner/get-started-banner.component';
import { GroupClassesComponent } from './group-classes/group-classes.component';
import { PrivateClassesComponent } from './private-classes/private-classes.component';
import { BenefitsComponent } from './splash/benefits/benefits.component';



@NgModule({
  declarations: [
    ContentComponent,
    SplashComponent,
    InfoComponent,
    GetStartedBannerComponent,
    GroupClassesComponent,
    PrivateClassesComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    RouterModule,
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
