import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { OrderMAsterComponent } from './Components/Order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';

const routes: Routes = [
  {path:'',component: MainLayoutComponent,children:[
    {path: '' , redirectTo :'/Home',pathMatch:'full'},
    {path: 'Home' , component:HomeComponent},
    {path: 'Products' , component:ProductListComponent},
    {path: 'Products/:pid' , component:ProductDetailsComponent},
    {path: 'Order' , component:OrderMAsterComponent},
  ]

  },
  {path: 'Login' , component:UserLoginComponent},
  {path: 'Logout' , component:UserLoginComponent},
  {path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
