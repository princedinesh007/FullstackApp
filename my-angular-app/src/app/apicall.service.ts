import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http:HttpClient) { }

  url="http://localhost:3000"

  getTodo()
  {
    return this.http.get(`${this.url}/getTodo`);
  }
  postTodo(data:any)
  {
    return this.http.post(`${this.url}/createTodo`,data)
  }
  deleteTodo(id:any)
  {
    return this.http.delete(`${this.url}/deleteTodo/${id}`)
  }
}
