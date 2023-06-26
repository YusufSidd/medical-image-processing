import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UserRegistration } from './user-registration';
// import { Register } from 'src/app/register';

// import { RegisterService } from '../register/register.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

      // baseUrl="http://localhost:8081/api/v1/register"
    

  constructor(private httpClient: HttpClient) { }


  registerApi(regData: UserRegistration){
    return this.httpClient.post<any>(
      "http://localhost:8081/api/v1/register",regData
    );
  }
}