import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem :any;
  qty =0
  cartCount = 0
  units = 0
  estTot = 0
  FinalCost = 0

  //popup

  confirmed = false
  currentStep =1;
  name='';
  address='';
  phone='';
  doorNo='';
  pin='';
  city='';
  showModal= false;
  constructor(private OrderService: OrderService,private cartservice:CartService, private toastr:ToastrService){}  

  ngOnInit(){
    this.cartservice.getCartItems().subscribe((data)=>{
      this.cartItem=data
      this.calculateItem()  
      
      console.log(this.cartItem, "current cart Item")
    })
  }

  increase(id:string){
    const previousItem = this.cartItem.find((item:any)=> item.item._id== id)
    let qty = previousItem.qty
    if(qty == previousItem.item.availability){
      this.toastr.warning("Item Selection beyond the Stock", "Notification");
      return;
    }

    qty+=1
    
    if(previousItem){
      this.cartItem = this.cartItem.map((item:any)=>{
        if(item.item._id==previousItem.item._id){
          item.qty=qty
        }
        return item
      })
    }

    this.cartservice.Update(this.cartItem);
    this.calculateItem()      
  }

  decrease(id:string){
    const previousItem = this.cartItem.find((item:any)=> item.item._id== id)
    let qty = previousItem.qty
    if(qty == 1){
      return;
    }

    qty-=1
    
    if(previousItem){
      this.cartItem = this.cartItem.map((item:any)=>{
        if(item.item._id==previousItem.item._id){
          item.qty=qty
        }
        return item
      })
    }

    this.cartservice.Update(this.cartItem);  
    this.calculateItem()  
  }
 
  deleteItem(id:string){
    const previousItem = this.cartItem.find((item:any)=> item.item._id== id)
    if(previousItem){
      const filtered = this.cartItem.filter((item:any)=>item.item._id!==previousItem.item._id)
      this.cartservice.Update(filtered)
    } 
    this.calculateItem()
    }

    calculateItem(){
      this.cartCount = this.cartItem.length;
      this.units = this.cartItem.reduce((acc:any,current:any)=>{
        return acc+current.qty
      },0)

      this.estTot = this.cartItem.reduce((acc:any,current:any)=>{
        return acc + (current.item.price * current.qty)
      },0)
    }


     //buy now pop-up
  openPopup(){
    this.showModal=true;
    this.currentStep=1;
    this.calculateItem()
  }

  nextstep(){
    if(this.name&&this.address&&this.phone&&this.pin&&this.city&&this.doorNo){
      this.currentStep=2;
    }
    else{
      alert('Please Fill all fields.');
    }
  }

  confirm(){
    const newOrder={
      name:this.name,
      address:this.address,
      doorNo:this.doorNo,
      pin: this.pin,
      city: this.city,
      phone:this.phone,
      items:this.cartItem,
      
    }
    console.log(newOrder)
    this.OrderService.saveOrders(newOrder);
    this.confirmed =true

    setTimeout(()=>{this.confirmed=false},2500)
    this.closeModal()
    this.orderComplete()
    
  }

  closeModal(){
    this.showModal=false;
    this.name='';
    this.doorNo='';
    this.pin='';
    this.city=''
    this.address='';
    this.phone='';
    this.currentStep=1
  }

  cancelOrder(){
    this.closeModal();
  }

   orderComplete() {
              this.cartservice.OrderPlaced()//clear cart
          }
    
  }





