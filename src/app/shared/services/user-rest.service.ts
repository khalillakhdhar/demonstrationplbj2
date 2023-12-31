import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  users:User[]=[];
  userUrl="http://localhost:8080/api/users/";
  constructor( private http: HttpClient) { }
  getUsers()
  {
   return this.http.get<User[]>(this.userUrl+"/list");


  }
  addUser(user:User)
  {
    return this.http.post(this.userUrl+"/add",user);
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/${userId}`);
  }
}
