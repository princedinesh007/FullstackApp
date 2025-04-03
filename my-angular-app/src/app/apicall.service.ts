import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http:HttpClient) { }
  accessToken = localStorage.getItem('accessToken');

  url="http://localhost:3000"

  getTodo()
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get(`${this.url}/getTodo`,{headers});
  }
  postTodo(data:any)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.post(`${this.url}/createTodo`,{headers},data)
  }
  deleteTodo(id:any)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.delete(`${this.url}/deleteTodo/${id}`,{headers})
  }
  updateTodo(id:any,data:any)
  {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.put(`${this.url}/updateTodo/${id}`,data,{headers})
  }
  register(data:any)
  {
    return this.http.post(`${this.url}/register`,data);
  }
  login(data:any)
  {
    return this.http.post(`${this.url}/signIn`,data);
  }
}
