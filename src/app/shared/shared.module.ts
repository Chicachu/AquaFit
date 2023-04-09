import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './header/info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './loader/loader.component';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    ToastrModule.forRoot()
  ], 
  exports: [
    ComponentsModule,
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    ToastrModule,
    LoaderComponent,
    PipesModule
  ]
})
export class SharedModule { }