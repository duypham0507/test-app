import { Person } from '../person';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test-angular.component.html',
  styleUrls: ['./test-angular.component.css'],
})
export class TestAngularComponent implements OnInit {
  people: Person[] = [
    {id: 1, name: 'Bố', age: 60, address: 'Thái Bình'},
    {id: 1, name: 'Mẹ', age: 55, address: 'Thái Bình'},
    {id: 1, name: 'Chị', age: 31, address: 'Hà Nội'},
    {id: 1, name: 'Tôi', age: 23, address: 'Hà Nội'},
  ];
  displayedColumns: string[] = ['id', 'name', 'age', 'address'];
  dataSource = this.people.map(a => {
    return Object.assign([],
      {
        id: a.id,
        name: a.name,
        age: a.age
      });
    
  });

  constructor() {

  }


  ngOnInit(): void {
    console.log(this.dataSource)
  }

  
}
