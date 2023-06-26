import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http :HttpClient) { }

  baseUrl: "http://localhost:8080/";

  postProduct(data){
    return this.http.post(this.baseUrl +"product-service/api/v1/addproduct",data);
  }


  getproducts(){
    return this.http.get<any>(this.baseUrl +"product-service/api/v1/product");
  }
}


// {
  
//   "productName" : " max" ,
//   "productPrice" : "1000 " ,
//      "productCondition" : " good" ,
//     "additionalDetails" : "no " ,
//      "productDescription" : "ghjkl " ,
//     "sellerName" : "qwerty " ,
//    "pincode" : "506456 " ,
//    "sellerEmail" : "sdfghjkl" ,
//    "sellerState" : "qwertyuio" ,
//    "brand" : "xcvbnm" ,
//    "color" : "red" ,
//   "yearsOfUse" : "two" ,
//    "warranty" : "no" ,
//     "productDefects" : "ok"
// }