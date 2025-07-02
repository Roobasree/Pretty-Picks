import { Component, OnInit } from '@angular/core';
import { CatergoriesService } from '../catergories.service';

@Component({
  selector: 'app-kurta-set',
  templateUrl: './kurta-set.component.html',
  styleUrls: ['./kurta-set.component.css']
})
export class KurtaSetComponent implements OnInit{

  kurta_set:any;
  Math = Math;
  currentpage=1
  itemperpage=8
  constructor(private service:CatergoriesService){}
  
  ngOnInit(){
    this.service.get_kurta_set().subscribe((data)=>{
      this.kurta_set=data
    })
  }

  get totalpage():number{
      return (this.kurta_set && Array.isArray(this.kurta_set))?this.Math.ceil(this.kurta_set.length/this.itemperpage):0;
  }

pagination() {
  if (this.kurta_set && Array.isArray(this.kurta_set)) {
    const start = (this.currentpage - 1) * this.itemperpage;
    return this.kurta_set.slice(start, start + this.itemperpage);
  }
  return [];
}


  nextpage(){
    if(this.currentpage < this.totalpage){
      this.currentpage++
    }
  }

  previouspage(){
    if(this.currentpage>1){
      this.currentpage--
    }
  }

}
