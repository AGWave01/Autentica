import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestListComponent implements OnInit {
  request  = [
    { type: 'Laptop', quantity: 5, requirements: 'Need to have Windows 10' },
    { type: 'Desktop', quantity: 3, requirements: 'Need to have a dedicated graphics card' },
    { type: 'Tablet', quantity: 10, requirements: 'Need to have a long battery life' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
