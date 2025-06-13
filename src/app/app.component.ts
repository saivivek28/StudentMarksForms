import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudashboardComponent } from './studashboard/studashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,StudashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
