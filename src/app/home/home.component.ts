import { Component } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  taskList:string[] = [];
  newTask:string = '';

  updateTaskList(){
    this.taskList.push(this.newTask);
    console.log("task : " + this.newTask);
    for(let item of this.taskList){
      console.log("ITemms : " + item)
    }
    this.newTask = '';
  }

  deleteTask(index: number){
    this.taskList.splice(index,1);
  }
}
