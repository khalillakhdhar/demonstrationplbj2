import { Injectable } from '@angular/core';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  tasks: Task[] = [];
  loggedIn: boolean = false;

  constructor() { }
  public getTasks(): Task[] {
 return this.tasks;
  }
  public addTask(task: Task): void {
  this.tasks.push(task);
  }
  public removeTask(id:number): void {
    this.tasks.splice(id, 1);
  
  }
}
