import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {
  parentId: number;
  sub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.parent.params.subscribe(param =>{
      this.parentId = param['id'];
      console.log('id:' + this.parentId);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
