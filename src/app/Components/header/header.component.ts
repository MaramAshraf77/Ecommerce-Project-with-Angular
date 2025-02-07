 import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
       isUserLogged:boolean=false;
       constructor(private authService:UserAuthService){

       }
       ngOnInit(): void {
          // this.isUserLogged = this.authService.isUserLogged;
          this.authService.getloggedStatus().subscribe(status=>
          {this.isUserLogged = status;

          });
       }

}
