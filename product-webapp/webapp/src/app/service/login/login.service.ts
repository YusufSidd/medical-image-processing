import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/login/user';
// import { Login } from 'src/app/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //  baseUrl="http://localhost:8081/api/v1/login"

  constructor(private httpClient:HttpClient) { }
  


  loginApi(loginData: User) {
    return this.httpClient.post<any>(
      "http://localhost:8081/api/v1/login",loginData
    );
  }

//  validate(user: User){
//   return this.httpClient.get("http://localhost:4200/api/v1/allUsers", user
//   );
// }
}
