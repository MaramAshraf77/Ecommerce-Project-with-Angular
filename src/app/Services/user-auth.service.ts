import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isloggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isloggedSubject = new BehaviorSubject<boolean> (false);
  }

  login(userName:string , password:string){
      let userToken = '123456789';
      localStorage.setItem("token",userToken);
      this.isloggedSubject.next(true);
  }
  logout(){
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);
  }
  get isUserLogged() : boolean
  {
    return (localStorage.getItem('token')) ?true : false
  }
  getloggedStatus()
  {
    return this.isloggedSubject;
  }
}
