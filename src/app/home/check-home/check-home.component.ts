import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'check-home',
  templateUrl: './check-home.component.html',
  styleUrls: ['./check-home.component.css']
})
export class CheckHomeComponent implements OnInit {
  @Input() childHome: string;
  constructor() { }

  ngOnInit(): void {
  }

}
