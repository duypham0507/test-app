import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanndComponent } from './quannd/quannd.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'new-window', component: QuanndComponent },
];

@NgModule({
  declarations: [QuanndComponent],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes)
    RouterModule.forChild(routes)
  ]
})
export class SystemModuleModule { }
