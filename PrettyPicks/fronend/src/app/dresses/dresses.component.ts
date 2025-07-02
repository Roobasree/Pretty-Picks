import { Component } from '@angular/core';
import { CatergoriesService } from '../catergories.service';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent {
  dress:any
  Math = Math;
  currentpage=1
  itemperpage=8
  constructor(private service:CatergoriesService) {
    
  }

  ngOnInit(){
    this.service.get_dress().subscribe((data)=>
    this.dress=data
  )
  }

get totalpage(): number {
  return (this.dress&& Array.isArray(this.dress)) 
    ? this.Math.ceil(this.dress.length / this.itemperpage) 
    : 0;
}
pagination() {
  if (this.dress&& Array.isArray(this.dress)) {
    const start = (this.currentpage - 1) * this.itemperpage;
    return this.dress.slice(start, start + this.itemperpage);
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
