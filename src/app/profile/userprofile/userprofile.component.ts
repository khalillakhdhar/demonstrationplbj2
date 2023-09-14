import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  user=new User();
constructor(private router: Router, private userService:UserService)
{
  console.log('userprofile');
  console.log('etat',this.userService.loggedIn);
  this.user=JSON.parse(localStorage.getItem('currentUser')|| "{}");

}
disconnect(): void
{
  this.userService.deconnexion();
  window.location.replace("/auth")
}

}
