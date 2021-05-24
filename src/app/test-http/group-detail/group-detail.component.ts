import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../../service/group.service';


@Component({
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit, OnDestroy {
  _id: number;
  subscription: Subscription;
  group: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public groupService: GroupService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
      console.log(this._id);
    });

    this.groupService.GetSingle(this._id).subscribe(data=>{
      this.group = data;
    });
  }

  GoToGroup(){
    this.router.navigate(['group'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
