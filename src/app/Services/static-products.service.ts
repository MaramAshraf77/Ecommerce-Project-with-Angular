import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prList:IProduct[];
  constructor() {
    this.prList =[
      {id:100, name:'LenovoThinkpad laptop',price:100,quantity:1,imgURL:'https://picsum.photos/200/100',categoryID:1},
      {id:200, name:'Apple laptop',price:200,quantity:1,imgURL:'https://picsum.photos/200/100',categoryID:1},
      {id:300, name:'Lenovo Tap',price:300,quantity:10,imgURL:'https://picsum.photos/200/100',categoryID:3},
      {id:400, name:'Samsung Tap',price:400,quantity:2,imgURL:'https://picsum.photos/200/100',categoryID:3},
      {id:500, name:'Samsung Note 10 ',price:500,quantity:2,imgURL:'https://picsum.photos/200/100',categoryID:3},

    ]
  }

  getAllProducts():IProduct[]
  {
     return this.prList;
  }
  getAllProductsByCatID(cID:number):IProduct[]
  {
    if(cID ==0)
      return this.prList;
    else
     return this.prList.filter(prd=>prd.categoryID== cID);

  }
  getProductsByID(pID:number):IProduct |null
  {
      let foundProduct =this.prList.find(prd=>prd.id==pID);
      return foundProduct?foundProduct:null;
  }
  addNewProduct(prd:IProduct){
    this.prList.push(prd);
  }
  getPrdIDs(): number[]
  {
    let prdIDs: number[]=this.prList.map(prd=>prd.id);
    return prdIDs;
  }
}
