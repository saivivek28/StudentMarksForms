import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studashboard.component.html',
  styleUrls: ['./studashboard.component.css']
})
export class StudashboardComponent {
  students: { name: string; grade: string }[] = [];

  studentName = '';
  studentGrade = '';

  addStudent(nameInput: HTMLInputElement, gradeInput: HTMLInputElement) {
    if (this.studentName&& this.studentGrade) {
      this.students.push({ name: this.studentName, grade: this.studentGrade.toUpperCase()});
      this.studentName = '';
      this.studentGrade = '';
      nameInput.value = '';
      gradeInput.value = '';
    }
  }

  
}
