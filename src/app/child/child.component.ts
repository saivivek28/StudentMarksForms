import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input()
  // title2?: string;

  // @Output() messageEvent = new EventEmitter<any>();

  // emitValue(){
  //   this.messageEvent.emit("Hello World from child");
  // }
//   message:string = "";
//   ngOnInit() : void{
// this.message = "hello from child";
//   }
}
