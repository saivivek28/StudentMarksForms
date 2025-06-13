import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
  studentName: string = '';
  subject: string = '';
  testScore1: number = 0;
  testScore2: number = 0;
  message: string = '';

  submitForm() {
    const total = Number(this.testScore1) + Number(this.testScore2);
    this.message = `Hi ${this.studentName}, you scored ${total} in ${this.subject}.`;
  }
}
