import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BenefitsComponent } from "./benefits/benefits.component";
import { GetStartedBannerComponent } from "./info/get-started-banner/get-started-banner.component";
import { InfoComponent } from "./info/info.component";
import { SplashComponent } from "./splash.component";

@NgModule({
  declarations: [
    SplashComponent,
    InfoComponent,
    GetStartedBannerComponent,
    BenefitsComponent
  ], 
  imports: [
    CommonModule
  ], 
  exports: [
    SplashComponent
  ]
})
export class SplashModule { }