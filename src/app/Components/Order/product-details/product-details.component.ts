import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { StaticProductsService } from '../../../Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number=0;
  prd: IProduct| null=null;
  prdIDsListArr:number[]=[];
  constructor(private activatedRoute:ActivatedRoute
    ,private prdService: StaticProductsService,
      private location:Location
    ,private router:Router){
  }
  ngOnInit():void{
    //this.currPrdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    //console.log(this.currPrdID);
    //this.prd = this.prdService.getProductsByID(this.currPrdID);
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currPrdID = Number(paramMap.get("pid"));
      this.prd = this.prdService.getProductsByID(this.currPrdID);
    });

    this.prdIDsListArr=this.prdService.getPrdIDs();
  }
  goBack(){
      this.location.back();
  }
  prevPrd(){
    let currIndex = this.prdIDsListArr.findIndex((elem)=>elem==this.currPrdID);
    let prevOPrdID;
    if(currIndex>0)
    {
      prevOPrdID = this.prdIDsListArr[currIndex-1];
      this.router.navigate(['/Products', prevOPrdID])

    }
  }
  nextPrd(){
    let currIndex = this.prdIDsListArr.findIndex((elem)=>elem==this.currPrdID);
    let nextPrdID;
    if(currIndex<this.prdIDsListArr.length)
    {
      nextPrdID = this.prdIDsListArr[currIndex+1];
      this.router.navigate(['/Products', nextPrdID])

    }
  }
}
