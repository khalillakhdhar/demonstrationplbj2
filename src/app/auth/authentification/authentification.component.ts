import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { UserRestService } from 'src/app/shared/services/user-rest.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
username:string="";
password:string="";
users:any;
constructor(private userService:UserService,private router:Router,private userapi:UserRestService)
{
  this.getUsers();
}
public onInit():void
{

}
getUsers():any
{
  this.userapi.getUsers().subscribe(data =>{this.users = data
  console.log("data",this.users);
  this.userService.users=this.users;
  });
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
