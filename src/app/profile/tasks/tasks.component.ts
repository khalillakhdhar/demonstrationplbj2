import { Component } from '@angular/core';
import { Task } from 'src/app/shared/classes/task';
import { TachesRestService } from 'src/app/shared/services/taches-rest.service';
import { TachesService } from 'src/app/shared/services/taches.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
task=new Task();
taches:any;
constructor(private tasksService:TachesService,private taskapi:TachesRestService)
{
let tsk=new Task();
tsk.tache="test";
this.tasksService.addTask(tsk);
  this.getTasks();

}
getTasks()
{
this.taskapi.getTaches().subscribe(data =>{
  this.taches=data;
console.log("taches",this.taches);
this.tasksService.tasks=this.taches;
});
}
addtaches()
{
  this.tasksService.addTask(this.task);
  this.taskapi.addTaches(this.task).subscribe(

    () =>{console.log("added task");}
  );
  this.getTasks();
  this.task=new Task();


}
deleteTache(id:any)
{
  alert("delete"+id);
  this.taskapi.deleteTaches(id).subscribe(()=>{
    console.log("task deleted",id);
    this.getTasks();
  })
}
}
