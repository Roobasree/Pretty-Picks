import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  signup(postUser:any): Observable<any>{
    return this.http.post(`http://localhost:4002/sign-up`,postUser);
  }

  login(userData:{email:String,password:String}): Observable<any>{
    return this.http.post(`http://localhost:4001/User`,userData)
  }
}
