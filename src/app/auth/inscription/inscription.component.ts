import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user: User=new User();
  constructor(private router: Router, private userService:UserService)
  {
    this.user.active=1;
  }
  public subscribe()
  {
    this.userService.addUser(this.user);
    console.log("added",this.user);
    console.log("userlist",this.userService.users);
    this.user=new User();
  }

}
