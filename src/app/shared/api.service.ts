import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postItem(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    // .pipe(map((res : any)=>{
    //   return res;
    // }))
  
   }
  
  getItems(){
    return this.http.get<any>("http://localhost:3000/posts")
  }
  
  deleteItem(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
  }
  
  updateItem(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
  }

  
}
