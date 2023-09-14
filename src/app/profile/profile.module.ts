import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserprofileComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
