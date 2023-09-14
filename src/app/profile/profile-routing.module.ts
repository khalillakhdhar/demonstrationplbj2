import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [{ path: '', component: ProfileComponent,
children: [
  {
    path:"",component: UserprofileComponent
  },
  {path:"task",component:TasksComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
