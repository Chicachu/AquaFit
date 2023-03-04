import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './info-content/content.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthenticationModule } from './users/authentication/authentication.module';
import { UserUpdateService } from './users/userUpdate.service';
import { UserModule } from './users/user.module';
import { UsersContainerComponent } from './users/users-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContentModule,
    SharedModule,
    UserModule,
  ],
  providers: [UserUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
