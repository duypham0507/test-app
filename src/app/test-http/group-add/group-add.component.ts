import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../../service/group.service';
import { MinLengthValidator } from '@angular/forms';

@Component({
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  id: number;
  member:any = {};
  disabled: boolean;
  form = new FormControl('', [Validators.required]);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public groupService: GroupService
  ) { }

  ngOnInit(): void {

  }

  goToGroup(): void{
    this.router.navigate(['/group']);
  }

  SaveForm(): void{
    this.groupService.Add(this.member).subscribe(res => {
      if (res){
        alert('Thêm thành công');
        this.router.navigate(['/group']);
      }
    });

  }

  getErrorMessage(): string {
    if (this.form.hasError('required')) {
      return 'Name is required';
    }
    return 'Tên phải trên 6 kí tự';

  }

  CheckRequired(): void{
    if (this.form.hasError('required')) {
      this.disabled = true;
    }
  }
}
