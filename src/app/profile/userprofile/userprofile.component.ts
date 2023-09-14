import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
constructor(private router: Router, private userService:UserService)
{
  console.log('userprofile');
  console.log('etat',this.userService.loggedIn);
}
}
