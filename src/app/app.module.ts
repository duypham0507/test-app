import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroupService } from './service/group.service';
import { AppComponent } from './app.component';
import { TestAngularComponent } from './test-angular/test-angular.component';
import { TestHttpComponent } from './test-http/test-http.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheckLoginComponent } from './check-login/check-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GroupDetailComponent } from './test-http/group-detail/group-detail.component';
import { GroupEditComponent } from './test-http/group-edit/group-edit.component';
import { GroupAddComponent } from './test-http/group-add/group-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TextDirective } from './directive/text.directive';
import { CheckAppPipe } from './pipes/check-app.pipe';
import { ChildHttpComponent } from './test-http/child-http/child-http.component';
import { CheckHomeComponent } from './home/check-home/check-home.component';
import { GroupOverviewComponent } from './test-http/group-overview/group-overview.component';
import { GroupProjectComponent } from './test-http/group-project/group-project.component';
import { LoginService } from './service/login.service';
import { CheckLoginGuard } from './check-login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: TestAngularComponent },
  { path: 'group', component: TestHttpComponent },
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


@NgModule({
  declarations: [
    AppComponent,
    TestAngularComponent,
    TestHttpComponent,
    HomeComponent,
    LoginComponent,
    CheckLoginComponent,
    NotfoundComponent,
    GroupDetailComponent,
    GroupEditComponent,
    GroupAddComponent,
    SignUpComponent,
    TextDirective,
    CheckAppPipe,
    ChildHttpComponent,
    CheckHomeComponent,
    GroupOverviewComponent,
    GroupProjectComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    GroupService,
    LoginService,
    CheckLoginGuard,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
