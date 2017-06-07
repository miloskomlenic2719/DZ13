import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './addbook/addbook.component';
import { AllBooksComponent } from './allbooks/allbooks.component';
import { DeleteBookComponent } from './deletebook/deletebook.component';
import { UpdateBookComponent } from './updatebook/updatebook.component';


@NgModule({
  imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, RegisterComponent, LoginComponent, AddBookComponent, AllBooksComponent,
    DeleteBookComponent, UpdateBookComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
