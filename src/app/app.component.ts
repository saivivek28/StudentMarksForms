import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudashboardComponent } from './studashboard/studashboard.component';
import { StudentformComponent } from './studentform/studentform.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,StudentformComponent, StudashboardComponent,TaskManagerComponent,TaskListComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
