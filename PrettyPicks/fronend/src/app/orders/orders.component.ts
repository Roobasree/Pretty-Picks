import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order_items :any
  today = new Date()
  modal=false
  selectedItem =0
  cancelled = false
  constructor(private orderService: OrderService){}
  
  // ngOnInit(){
  //   this.orderService.getOrders().subscribe((data)=>{
  //     this.order_items=data
  //     console.log(this.order_items)
  //   })
  // }

  ngOnInit() {
  this.orderService.getOrders().subscribe((data: any) => {
    // Ensure every order.items is always an array
    this.order_items = data.map((order: any) => {
      if (!Array.isArray(order.items)) {
        order.items = [order.items];  // wrap single item in array
      }
      return order;
    });
  });
}

  cancel(i:number){
    this.selectedItem = i
    this.modal=true
    
  }

  Confirm(){
    this.orderService.remove(this.selectedItem)
      this.selectedItem = 0
      this.modal=false
      this.cancelled = true
      setTimeout(()=>{this.cancelled=false},2500)

  }
  
  noCancel(){
    this.selectedItem = 0
    this.modal=false
    
  }


}
