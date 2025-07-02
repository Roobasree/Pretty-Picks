import { Component, Input, OnInit } from '@angular/core';
import { CatergoriesService } from '../catergories.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kurti-details',
  templateUrl: './kurti-details.component.html',
  styleUrls: ['./kurti-details.component.css']
})
export class KurtiDetailsComponent implements OnInit{
  //to display kurti details
  kurti:any
  Math = Math;
  qty:number=1
  discountprice:any
  finalprice:any
  confirmed = false
  //for pop-up

  currentStep =1;
  name='';
  address='';
  phone='';
  doorNo='';
  pin='';
  city='';
  showModal= false;



  constructor(private service:CatergoriesService, private route:ActivatedRoute, private toastr: ToastrService, private OrderService:OrderService, private cartservice: CartService){

  }

  ngOnInit():void{

    this.route.params.subscribe((data)=>{
      const id:string = data['id']
      this.service.view_kurti(id).subscribe((data:any)=>{
        this.kurti=data
      })
    })

  }

  //adding to cart
  addToCart()
  {
    const item = {
      item: this.kurti,
      qty: this.qty
    }
    this.cartservice.addtocart(item);
    this.toastr.success('Item added to Cart','Status')
    this.qty = 1;
  }

 //item increment and decrement
  decrease(){
    if(this.qty== 1){
    
      return
    }  
    this.qty = this.qty-1
  }

  increase(){
    if(this.qty== this.kurti.availability){
      this.toastr.info('Item selection beyond the Stock','Notification');
      return
    }  
    this.qty = this.qty+1
  }

  //buy now pop-up
  openPopup(){
    this.showModal=true;
    this.currentStep=1;
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
      items:[
        {
          item:this.kurti,
          qty:this.qty
        }
      ],

      total: this.kurti.price
    }
    console.log(newOrder)
    this.OrderService.saveOrders(newOrder);
    this.confirmed =true

    setTimeout(()=>{this.confirmed=false},2500)
    this.closeModal()
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



}
