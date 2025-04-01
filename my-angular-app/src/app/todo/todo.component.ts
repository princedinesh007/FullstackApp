import { Component, inject } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo:any=[];
  addItem:any;

  public TodoList=inject(ApicallService);

ngOnInit()
{
  this.getItem();
}
getItem()
{
  this.TodoList.getTodo().subscribe((res)=>{
    this.todo=res;
    console.log(this.todo)
  })
}
postTodo()
{
const todoData = { Todo_activity: this.addItem };
 this.TodoList.postTodo(todoData).subscribe((res:any)=>{
   alert(res.message);
   console.log(res)
   this.getItem();
 })
}
deleteTodo(item:any)
{
  console.log(item)
  this.TodoList.deleteTodo(item).subscribe((res:any)=>{
    alert(res.message);
    this.getItem();
  })
}
}
