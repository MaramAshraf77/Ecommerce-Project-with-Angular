import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { ProductsService } from '../../../Services/products.service';
import { Cart } from '../../../ViewModels/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit,OnChanges{
    //prList:IProduct[];
    prdListOfCat:IProduct[]=[];
    orderTotalPrice:number = 0;
    //selectedCatID:number=0;
    //totalPriceChanged: EventEmitter<>;
    orderDate:Date;
    @Input() sentCatID:number=0;
    //////****Maram */
    @Output() orderdSelectedUser: EventEmitter<Cart>;
    cartSelected:Cart;
    constructor(private prdService:ProductsService
      //private staticPrrdService:StaticProductsService
      ,private router:Router)
      {
      this.orderdSelectedUser = new EventEmitter<Cart>();
      this.cartSelected = new Cart(1,"",0,0);
      /*this.prList =[
        {id:100, name:'LenovoThinkpad laptop',price:100,quantity:1,imgURL:'https://picsum.photos/200/100',categoryID:1},
        {id:200, name:'Apple laptop',price:200,quantity:1,imgURL:'https://picsum.photos/200/100',categoryID:1},
        {id:300, name:'Lenovo Tap',price:300,quantity:10,imgURL:'https://picsum.photos/200/100',categoryID:3},
        {id:400, name:'Samsung Tap',price:400,quantity:2,imgURL:'https://picsum.photos/200/100',categoryID:3},
        {id:500, name:'Samsung Note 10 ',price:500,quantity:2,imgURL:'https://picsum.photos/200/100',categoryID:3},

      ]*/
      this.orderDate= new Date();
      //this.prdListOfCat = this.prList;
    }
  ngOnChanges(): void {
    //this.filterProductByCatID()
    //this.prdListOfCat=this.staticPrrdService.getAllProductsByCatID(this.sentCatID);
    this.prdService.getProductsByCatID(this.sentCatID).subscribe(products=>{
      this.prdListOfCat=products;
    });
  }
  ngOnInit(): void {
     // this.prdListOfCat=this.staticPrrdService.getAllProducts();
     this.prdService.getAllProducts().subscribe(products=>{
      this.prdListOfCat=products;
    });
  }
    buy(prdPrice:number,count:any){
         this.orderTotalPrice =  parseInt(count)*prdPrice;


    }
    //////****Maram */

    buyProduct(prdid:number,prdname:string,prdcount:any,prdprice:number){
      this.cartSelected={id:prdid,name:prdname,count:prdcount,price:prdprice};
      //Execute event
      this.orderdSelectedUser.emit(this.cartSelected);

    }
    /*changeCat(){
      this.selectedCatID = 1;
    }*/
    /*private filterProductByCatID()
    {
      if(this.sentCatID ==0)
        this.prdListOfCat =this.prList;
      else
       this.prdListOfCat =this.prList.filter(prd=>prd.categoryID==this.sentCatID);
    }*/
       openprdDetails(prdID:number){
          this.router.navigate(['/Products',prdID])
       }
}
