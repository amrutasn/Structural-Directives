import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {

  // Characteristics to hold batch name
  name:string;
  str:string;

  // flag to maintain status of batch name
  flag:boolean = false;

  constructor() 
  {
    this.name = '';
    this.str = '';
  }

  ngOnInit() 
  {
  }

  // handler for the button event
  gun()
  {
    this.str = 'Your entered name is '+this.name;  
  }

  // HAndler for text box
  fun(event:any)
  {
    // Flag indicates data is entered by the user
    this.flag = true;
    this.name = (<HTMLInputElement>event.target).value;
  }

}
