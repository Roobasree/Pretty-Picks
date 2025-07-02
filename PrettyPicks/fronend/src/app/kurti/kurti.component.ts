import { Component, OnInit } from '@angular/core';
import { CatergoriesService } from '../catergories.service';

@Component({
  selector: 'app-kurti',
  templateUrl: './kurti.component.html',
  styleUrls: ['./kurti.component.css']
})
export class KurtiComponent implements OnInit{
  kurti:any
  Math = Math;
  currentpage=1
  itemperpage=8
  constructor(private service:CatergoriesService) {
    
  }

  ngOnInit(){
    this.service.get_kurti().subscribe((data)=>
    this.kurti=data
  )
  }

get totalpage(): number {
  return (this.kurti && Array.isArray(this.kurti)) 
    ? this.Math.ceil(this.kurti.length / this.itemperpage) 
    : 0;
}
pagination() {
  if (this.kurti && Array.isArray(this.kurti)) {
    const start = (this.currentpage - 1) * this.itemperpage;
    return this.kurti.slice(start, start + this.itemperpage);
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
