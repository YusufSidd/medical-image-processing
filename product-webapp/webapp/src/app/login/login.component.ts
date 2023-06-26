import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
// import Validation from './validation';
// import { authService } from './auth.service';
import { LoginService } from "../service/login/login.service";
import { User } from "../model/login/user";
import { Router } from "@angular/router";
import { AppService } from "../service/app.service";

interface Language {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  search: String = "";

  form: FormGroup;
  submitted = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AppService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
    });
  }

  ngOnInit(): void {
    // this.form = this.formBuilder.group(
    //   {
    //     email: ['', [Validators.required, Validators.email]],
    //     password: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(40)
    //       ]
    //     ]
    //   }
    // );
  }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  loginObj: User = new User();

  onSubmit(): void {
    // this.submitted = true;

    // if (this.form.invalid) {
    //   return;
    // }

    // console.log(JSON.stringify(this.form.value, null, 2));
    console.log("FORMDATA", this.form.value);
    this.loginObj.email = this.form.value.email;
    this.loginObj.password = this.form.value.password;
    this.loginService.loginApi(this.loginObj).subscribe(
      (data) => {
        console.log("validated", data);
        this.form.reset();
        localStorage.setItem("buyerEmail", this.loginObj.email);

        this.router.navigate(["/showProduct"]);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error;
      }
    );
  }
  email = new FormControl("", [Validators.required, Validators.email]);
  RememberMe = false;
  hide = true;

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }
}
