import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList:string[];
  constructor() {
    this.adsList=["Big Discount",
                  "Sale up to 50%",
                  "Check our friday offers",
                  "",
                  "Spcial white friday offers up to 70%"];
  }

  getScheduleAds(intervalInSeconds: number)
  {
    return new Observable <string>((observer)=>{
      let counter = 0;
      let adsTimer = setInterval(()=>{
        if(counter == this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter] == ""){
          observer.error("Error: Empty Ad.");
        }
        observer.next(this.adsList[counter]);
        counter++;
      },
     intervalInSeconds*1000);

    return{
        unsubscribe() {
            clearInterval(adsTimer);
            console.log("In obs Unsubscribe...")
        }
     }
    });
  }
}
