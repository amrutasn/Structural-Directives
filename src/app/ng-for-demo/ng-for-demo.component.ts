import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  constructor() { }
  public Employee = ["Amruta","Aditya","Abhi","Aarti","Kavita"];
  ngOnInit(): void {
  }

}
