import { Component } from '@angular/core';
import { CatergoriesService } from '../catergories.service';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.css']
})
export class SareeComponent {
  saree:any
  Math = Math;
  currentpage=1
  itemperpage=8
  constructor(private service:CatergoriesService) {
    
  }

  ngOnInit(){
    this.service.get_saree().subscribe((data)=>
    this.saree=data
  )
  }

get totalpage(): number {
  return (this.saree&& Array.isArray(this.saree)) 
    ? this.Math.ceil(this.saree.length / this.itemperpage) 
    : 0;
}
pagination() {
  if (this.saree && Array.isArray(this.saree)) {
    const start = (this.currentpage - 1) * this.itemperpage;
    return this.saree.slice(start, start + this.itemperpage);
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
