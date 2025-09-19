import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Post1Component } from './components/post1/post1.component';
import { Post2Component } from './components/post2/post2.component';
import { PostService } from './services/post.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './components/std-form/std-form.component';
import { StdTableComponent } from './components/std-table/std-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetConfirmComponent } from './components/get-confirm/get-confirm.component';
import { PassengerModule } from './passengers/passenger.module';
import { MaterialModule } from './shared/modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    Post1Component,
    Post2Component,
    TodoFormComponent,
    TodoListComponent,
    StdFormComponent,
    StdTableComponent,
    GetConfirmComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PassengerModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
