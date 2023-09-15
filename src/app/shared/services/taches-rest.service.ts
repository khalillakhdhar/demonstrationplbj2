import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TachesRestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  taches:Task[]=[];
  tacheUrl="http://localhost:8080/tache";
  constructor( private http: HttpClient) { }
  getTaches()
  {
   return this.http.get<Task[]>(this.tacheUrl);


  }
  addTaches(tache:Task)
  {
   return this.http.post(this.tacheUrl,tache);
  }
  deleteTaches(tacheId: number): Observable<any> {
    return this.http.delete(this.tacheUrl+"/"+tacheId);
  }
}
