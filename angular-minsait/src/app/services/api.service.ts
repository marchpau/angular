import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCharacter(data : any){
    return this.http.post<any>("http://localhost:3000/characterList/",data);
  }
  getCharacter(){
    return this.http.get<any>("http://localhost:3000/characterList/");
  }
  putCharacter(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/characterList/"+id ,data);
  }
  deleteCharacter(id:number){
    return this.http.delete<any>("http://localhost:3000/characterList/"+id);
  }
}
