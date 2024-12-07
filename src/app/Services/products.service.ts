import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>
  {
    //return this.httpClient.get<IProduct[]>("http://localhost:3000/products");
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);

  }

  getProductsByCatID(catID:number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`);
  }


  getProductsByID(prdID:number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products?${prdID}`);
  }


  addProduct(newPrd:IProduct)
  {
    return this.httpClient.post(`${environment.APIURL}/products`,JSON.stringify(newPrd))
  }

  updateProduct(prdID:number,UpdatedPrd: IProduct)
  {

  }

  deleteProduct(prdID:number)
  {

  }
}
