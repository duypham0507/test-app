import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupAddComponent } from './test-http/group-add/group-add.component';
import { GroupDetailComponent } from './test-http/group-detail/group-detail.component';
import { GroupEditComponent } from './test-http/group-edit/group-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestAngularComponent } from './test-angular/test-angular.component';
import { TestHttpComponent } from './test-http/test-http.component';
import { GroupOverviewComponent } from './test-http/group-overview/group-overview.component';
import { GroupProjectComponent } from './test-http/group-project/group-project.component';
import { CheckLoginGuard } from './check-login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'people', component: TestAngularComponent },
  { path: 'group', component: TestHttpComponent, canActivate: [CheckLoginGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'group-detail/:id', component: GroupDetailComponent, children:[
    { path: 'overview', component: GroupOverviewComponent },
    { path: 'project', component: GroupProjectComponent },
  ]},
  { path: 'group-edit/:id', component: GroupEditComponent },
  { path: 'group-add', component: GroupAddComponent },
  { path: '**', component: NotfoundComponent }
];

export const appRoutes = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
