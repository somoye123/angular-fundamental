import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
      color: white;
    }`]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
