import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child-http',
  templateUrl: './child-http.component.html',
  styleUrls: ['./child-http.component.css']
})
export class ChildHttpComponent implements OnInit {
  @Input()
  @Output() childVote = new EventEmitter<boolean>();
  voted: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  vote(agree: boolean) {
    this.voted= true;
    this.childVote.emit(agree);
  }

}
