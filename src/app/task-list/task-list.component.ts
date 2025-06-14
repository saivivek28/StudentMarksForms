import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
 @Input() taskList: { name: string; priority: string; completed: boolean }[] = [];
@Output() completetask = new EventEmitter<(number)>();

 getPriorityBadge(priority: string): string{
switch (priority){
  case 'High':
    return ' 🔴 Urgent';
  case 'Medium': return ' 🟠Normal';
  case 'Low':return " 🟡Low";
  default: return '';

}
 }
  
}
