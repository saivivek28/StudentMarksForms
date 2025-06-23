import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
hello = "text";

data:string[] = [];
namaste(data : any){
  alert(data);
}
UserName:string = "";
}

