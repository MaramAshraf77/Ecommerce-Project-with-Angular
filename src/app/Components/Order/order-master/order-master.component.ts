import { Component } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { Cart } from '../../../ViewModels/cart';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMAsterComponent {
    catlist:ICategory[];
    selectedCatID:number = 0;
    OrderTotalPrice:number=0;
    recievedcartSelected:Cart[];
    constructor(){
      this.recievedcartSelected = [];
      this.catlist=[
        {id:1,name:'Laptop'},
        {id:2,name:'Tablet'},
        {id:3,name:'Mobile'}
      ];
    }
    onCategoryChange() {
      console.log('Selected Category ID:', this.selectedCatID);
      // أي عمليات إضافية تحتاجها...
    }
    onbuyProduct(cart:Cart){
      this.recievedcartSelected.push(cart);

    }
    remove(id:number){
      this.recievedcartSelected = this.recievedcartSelected.filter(prd=>prd.id!=id);
    }
    orderTotalPrice(){
      for (let i = 0; i <  this.recievedcartSelected.length; i++) {
         this.OrderTotalPrice += this.recievedcartSelected[i].count * this.recievedcartSelected[i].price ;

      }
    }
}
