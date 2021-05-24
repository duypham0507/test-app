import { GroupService } from '../service/group.service';

import { Component, AfterViewInit, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  group: any;
  keyword: string;
  // displayedColumns: string[] = ['id', 'name', 'age', 'createdAt', 'actions'];
  trump: number = 0;
  biden: number = 0;
  // dataSource = new MatTableDataSource();

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private groupService: GroupService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.LoadData();

  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  search(){
    this.groupService.Search(this.keyword).subscribe((res: any) =>{
      this.group = res;
    }, error => {
      console.log(error);
    })
  }

  Delete(id: number): void {
    const confirmResult = confirm('Xác nhận xóa?');
    if (confirmResult) {
      this.groupService.Delete(id).subscribe((res) => {
        if (res) {
          alert('Đã xóa');
          this.LoadData();
        }
      });
    }
  }

  LoadData(): void {
    this.groupService.getList().subscribe((res) => {
      this.group = res;

    });

  }

  parentVote(agree: boolean){
    if(agree) this.trump++;
    else this.biden++;
  }



}
