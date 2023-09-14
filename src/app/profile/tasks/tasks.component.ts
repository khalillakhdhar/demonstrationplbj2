import { Component } from '@angular/core';
import { Task } from 'src/app/shared/classes/task';
import { TachesService } from 'src/app/shared/services/taches.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
task=new Task();
taches:Task[] = [];
constructor(private tasksService:TachesService)
{
let tsk=new Task();
tsk.tache="test";
this.tasksService.addTask(tsk);
  this.getTasks();

}
getTasks():Task[]
{
  this.taches=this.tasksService.getTasks();
  console.log("taches ",this.taches);
  return  this.taches;
  
}
addtaches()
{
  this.tasksService.addTask(this.task);
  this.getTasks();
  this.task=new Task();
}
}
