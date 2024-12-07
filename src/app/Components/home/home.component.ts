import { Component, OnInit } from '@angular/core';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { StoredData } from '../../ViewModels/stored-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
     storeInfo: StoredData;
     isImageShown:boolean=true;
     constructor(private promoAds:PromotionAdsService){
      this.storeInfo = new StoredData('ITI Store','https://picsum.photos/400/300',['cairo','alex','gize'])

     }
  ngOnInit(): void {
    let observer={
       next:(data:string)=>{
          console.log(data);
       },
        error:(err:string)=>{
           console.log(err);
        },
        complete:()=>{
          console.log("Ads Finsihed!")
        }
    };
    this.promoAds.getScheduleAds(3).subscribe(observer);
  }
     toggleImage(){
      this.isImageShown = !this.isImageShown;
    }
}
