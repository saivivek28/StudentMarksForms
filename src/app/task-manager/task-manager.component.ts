import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {
  taskname: string = "";
  priority: string = 'High';

  tasks : { name: string; priority: string ;completed:boolean}[] = [];
  
  addTask() {
    if (this.taskname){
      this.tasks.push({ name: this.taskname, priority: this.priority, completed: false });
      this.taskname = "";
      this.priority = 'High';
    }
  }
  markAsComplete(index: number) {
    this.tasks[index].completed = true;
  
}
}
