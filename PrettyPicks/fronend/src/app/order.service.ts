import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any= [];
  private orderSubject = new BehaviorSubject<any[]>(this.orders);

  saveOrders(order:any){
    this.orders.push(order);
    this.orderSubject.next(this.orders);
  }

  getOrders(){
    return this.orderSubject.asObservable();
  }

  update(items:any){
    this.orders=items
    this.orderSubject.next(this.orders)
   }

   remove(index:number){
    this.orders.splice(index,1)
    this.orderSubject.next(this.orders)
   }

}
