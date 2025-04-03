import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:"",component:RegisterComponent, title:"CurdApplication"
  },
  {
    path:"todo",component:TodoComponent,title:"TodoCreation"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
