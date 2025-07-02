import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatergoriesService {

  constructor(private http:HttpClient) { }

  get_kurti(): Observable<any>{
    return this.http.get('http://localhost:4000/kurti')
  }

  get_kurta_set(): Observable<any>{
    return this.http.get('http://localhost:4000/kurta-set')
  }

  get_saree(){
    return this.http.get('http://localhost:4000/sarees')
  }
  
  get_dress(){
    return this.http.get('http://localhost:4000/dresses')
  }

  view_kurti(id:String){
    return this.http.get(`http://localhost:4003/kurti/${id}`)
  }
  
}
