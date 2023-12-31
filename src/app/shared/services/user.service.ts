import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  loggedIn: boolean = false;

  constructor() { }
  public getUsers(): User[] {
 return this.users;
  }
  public addUser(user: User): void {
  this.users.push(user);
  }
  public removeUser(id:number): void {
    this.users.splice(id, 1);
  
  }
  public authUser(username:string, password:string): boolean {

    for(let user of this.users) {
  if(user.username === username && user.password === password) {
  this.loggedIn = true;
  let currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  localStorage.setItem('etat',"connected");
  return true;
  }
}
  
return false;  

}
public deconnexion(): void {
localStorage.removeItem('currentUser');
localStorage.setItem('etat',"not connected");


}

}
