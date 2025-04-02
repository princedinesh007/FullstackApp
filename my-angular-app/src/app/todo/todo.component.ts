import { Component, inject } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo:any=[];
  addItem:any;
  editItem:any;
  editItemId:any;
  isOpen:boolean=false;
  delete:boolean=false;
  
  public TodoList=inject(ApicallService);
  
  constructor(public modalService: NgbModal) {}

ngOnInit()
{
  this.getItem();
}

getItem()
{
  this.TodoList.getTodo().subscribe((res)=>{
    this.todo=res;
  })
}
postTodo()
{
const todoData = { Todo_activity: this.addItem };
 this.TodoList.postTodo(todoData).subscribe((res:any)=>{
  this.isOpen=true;
  this.getItem();
  this.addItem=''
 },(error)=>{
  console.error(error.error.message)
 })
}
deleteTodo(item:any)
{
  this.TodoList.deleteTodo(item).subscribe((res:any)=>{
    this.delete=true;
    this.getItem();
  })
}

edit_data(id:any)
{
   const item= this.todo.find((item:any)=>item._id==id);
   if (item) {
    this.editItem = item.Todo_activity;
    this.editItemId=item._id
  }
}
updateTodo(itemId:any)
{
  const todoData = { Todo_activity: this.editItem };
  this.TodoList.updateTodo(itemId,todoData).subscribe((res:any)=>{
    this.getItem();
  })

}
}
