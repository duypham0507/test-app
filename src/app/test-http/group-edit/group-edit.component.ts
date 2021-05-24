import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../../service/group.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css'],
})
export class GroupEditComponent implements OnInit, OnDestroy {
  id: number;
  subscription: Subscription;
  member: any;
  disabled: boolean;
  form = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id);
    });

    this.groupService.GetSingle(this.id).subscribe((rs) => {
      this.member = rs;
    });
  }

  SaveForm(): void {
    this.groupService.Updated(this.id, this.member).subscribe((res) => {
      if (res) {
        alert('Đã lưu');
        this.disabled = true;
      }
    });
  }

  goToGroup(): void {
    this.router.navigate(['group']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
