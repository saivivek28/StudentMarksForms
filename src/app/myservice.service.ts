import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  programs: { name: string; age: number; gender: string }[] = [
    { name: "Sai", age: 20, gender: "Male" },
    { name: "pradha", age: 22, gender: "Male" },
    { name: "yash", age: 21, gender: "Male" }

  ];
  display(){
    return this.programs;
  }

  }

