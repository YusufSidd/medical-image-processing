import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/login/user";
import { UserRegistration } from "./register/user-registration";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

//  bashUrl : "https://swapon.stackroute.io" ;

  //  bashUrl : "http://localhost:8080" ;

  // registerApi(regData: UserRegistration) {
  //   return this.http.post<any>(
  //     this.bashUrl+"/authentication-service/api/v1/register",
  //     regData
  //   );
  // }

  // loginApi(loginData: User) {
  //   return this.http.post<any>(
  //     "http://localhost:8080/authentication-service/api/v1/login",
  //     loginData
  //   );
  // }

  // getbyEmailApi(emailId) {
  //   return this.http.get(
  //     "http://localhost:8080/authentication-serviceapi/v1/product/sellerEmail/" +
  //       emailId
  //   );
  // }

  // postProduct(data) {
  //   return this.http.post(
  //     "http://localhost:8080/product-service/api/v1/addproduct",
  //     data
  //   );
  // }

  // getproducts() {
  //   return this.http.get<any>(
  //     "http://localhost:8080/product-service/api/v1/product"
  //   );
  // }

  // getDetail() {
  //   return this.http.get(
  //     "http://localhost:8080/product-service/api/v1/product/productId/" +
  //       localStorage.getItem("productId")
  //   );
  // }

  // getMyProducts() {
  //   return this.http.get<any>(
  //     "http://localhost:8080/product-service/api/v1/product/sellerEmail/" +
  //       localStorage.getItem("buyerEmail")
  //   );
  // }

  // deleteMyProduct(productId: any) {
  //   return this.http.delete<any>(
  //     "http://localhost:8080/product-service/api/v1/delete/" + productId
  //   );
  // }

  // getByFilter() {
  //   return this.http.get<any>(
  //     "http://localhost:8080/recommendation-service/api/v1/productByStateAndCategory/" +
  //       localStorage.getItem("sellerState") +
  //       "/" +
  //       localStorage.getItem("category")
  //   );
  // }

  // getAllProduct() {
  //   return this.http.get(
  //     "http://localhost:8080/recommendation-service/api/v1/productByCategory/" +
  //       localStorage.getItem("catagory")
  //   );
  // }

  // getByCategory(category) {
  //   return this.http.get(
  //     "http://localhost:8080/product-serviceapi/v1/productByCategory/" +
  //       category
  //   );
  // }

  // getByProductCategory() {
  //   return this.http.get(
  //     "http://localhost:8080/product-service/api/v1/productByCategory/" +
  //       localStorage.getItem("category")
  //   );
  // }




  registerApi(regData: UserRegistration) {
    return this.http.post<any>(
     "https://swapon.stackroute.io/authentication-service/api/v1/register",
      regData
    );
  }

  loginApi(loginData: User) {
    return this.http.post<any>(
      "https://swapon.stackroute.io/authentication-service/api/v1/login",
      loginData
    );
  }

  getbyEmailApi(emailId) {
    return this.http.get(
      "https://swapon.stackroute.io/authentication-serviceapi/v1/product/sellerEmail/" +
        emailId
    );
  }

  postProduct(data) {
    return this.http.post(
      "https://swapon.stackroute.io/product-service/api/v1/addproduct",
      data
    );
  }

  getproducts() {
    return this.http.get<any>(
      "https://swapon.stackroute.io/product-service/api/v1/product"
    );
  }

  getDetail() {
    return this.http.get(
      "https://swapon.stackroute.io/product-service/api/v1/product/productId/" +
        localStorage.getItem("productId")
    );
  }

  getMyProducts() {
    return this.http.get<any>(
      "https://swapon.stackroute.io/product-service/api/v1/product/sellerEmail/" +
        localStorage.getItem("buyerEmail")
    );
  }

  deleteMyProduct(productId: any) {
    return this.http.delete<any>(
      "https://swapon.stackroute.io/product-service/api/v1/delete/" + productId
    );
  }

  getByFilter() {
    return this.http.get<any>(
      "https://swapon.stackroute.io/recommendation-service/api/v1/productByStateAndCategory/" +
        localStorage.getItem("sellerState") +
        "/" +
        localStorage.getItem("category")
    );
  }

  getAllProduct() {
    return this.http.get(
      "https://swapon.stackroute.io/recommendation-service/api/v1/productByCategory/" +
        localStorage.getItem("catagory")
    );
  }

  getByCategory(category) {
    return this.http.get(
      "https://swapon.stackroute.io/product-serviceapi/v1/productByCategory/" +
        category
    );
  }

  getByProductCategory() {
    return this.http.get(
      "https://swapon.stackroute.io/product-service/api/v1/productByCategory/" +
        localStorage.getItem("category")
    );
  }
}
