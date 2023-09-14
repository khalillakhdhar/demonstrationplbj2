import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
username:string="";
password:string="";
constructor(private userService:UserService,private router:Router)
{


}
authentification()
{
  if(this.userService.authUser(this.username, this.password))
  {
    this.router.navigate(['../profile']);

  }
  else
  {
    alert("email ou mot de passe incorrecte!");
  }
}
}
