import { CommonModule} from '@angular/common';
import { Component, ElementRef, ViewChild , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { request } from 'http';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
Name:string = "";
Rollno :string = "";
Age : number = 0;
  constructor(private httpClient: HttpClient) {
    httpClient.get('http://localhost:3000/students').subscribe(
      (res) => {
        console.log(res)
      })
    }
savedata(){
  let request = {
    name:this.Name,
    age:this.Age,
    RollNo:this.Rollno

  }
     this.httpClient.post('http://localhost:3000/students', request).subscribe((res) =>{
      console.log(res);
    })
  
}
  }
//   data: string[] = [];
//   input: string = '';

  
//   Hello() {
//     return 'Hello from Ts!';
//   }
//   ton = "radio";
//   sendData(data: any) {
//     alert('Data sent: ' + data);
//   }
//   head: string = '';

//   @ViewChild('para') para!: ElementRef;

//   changeText() {
//     this.para.nativeElement.innerText = 'Text changed!';
//     console.log(this.para);
//   }
//   age: number = 20;
//   list: string[] = ['Angular', 'React', 'Vue'];

//   color:string = "";
//   family:string = "";

//   myMessage:string = "";
//   ngOnInit(): void {
// this.myMessage = "Hello Message";

//   }
  
