import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
    @Input() task:string = '';
    @Input() index:number = 0;

    @Output() deleteTask = new EventEmitter<number>();

    onDelete(){
      console.log("YOu just pressed delete button");
      this.deleteTask.emit(this.index);
    }
}
