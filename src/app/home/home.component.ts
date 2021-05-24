import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  childTitle: string = "This is Home component"

  gotoGoogle(): void {
    window.open('https://www.google.com', '_blank');
  }

  goToSpecificUrl(url): void {
    window.location.href = url;
  }

  goToGroup() {
    this.router.navigate(['group']);
  }

  ngOnInit(): void {}
}
