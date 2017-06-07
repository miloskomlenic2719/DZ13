import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './addbook/addbook.component';
import { AllBooksComponent } from './allbooks/allbooks.component';
import { DeleteBookComponent } from './deletebook/deletebook.component';
import { UpdateBookComponent } from './updatebook/updatebook.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addbook', component: AddBookComponent},
  { path: 'allbooks', component: AllBooksComponent},
  { path: 'deletebook', component: DeleteBookComponent},
  { path: 'updatebook', component: UpdateBookComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
