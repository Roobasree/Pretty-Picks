import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private Cartitems: any[] =[];
  private CartitemSubject = new BehaviorSubject<any[]>(this.Cartitems)

addtocart(newitem: any) {
  const existing = this.Cartitems.find((item: any) => item.item._id === newitem.item._id);

  if (existing) {
    existing.qty += newitem.qty;
  } else {
    this.Cartitems.push(newitem);
  }

  this.CartitemSubject.next([...this.Cartitems]);
}


   getCartItems(){
    return this.CartitemSubject.asObservable();
   }


   Update(item:any){
    this.Cartitems=item
    this.CartitemSubject.next(this.Cartitems)
   }

  OrderPlaced(){
    this.Cartitems = []
    this.CartitemSubject.next(this.Cartitems)
  }
}
