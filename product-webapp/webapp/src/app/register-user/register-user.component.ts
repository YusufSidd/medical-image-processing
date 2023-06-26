import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../service/register/register.service";
import { UserRegistration } from "../service/register/user-registration";
//import {Swal} from "sweetalert2";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { AppService } from "../service/app.service";
//import Swal from "sweetalert2";
// import { passwordMatchValidator } from "./validator";

interface Language {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"],
})
export class RegisterUserComponent implements OnInit {
  user: UserRegistration = new UserRegistration();
  errorMessage: String = "";
  registerData: UserRegistration;
  indexOfSelectedTab: number;
  registerForm = new FormGroup({
    firstname: new FormControl("", Validators.required),
    contactNo: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", Validators.required),
  });

  minPw = 8;

  checked = false;

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  cpassword = new FormControl("", [Validators.required]);
  RememberMe = false;
  hide = true;

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a valid Email";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  languages: Language[] = [
    { value: "HINDI-1", viewValue: "HINDI" },
    { value: "ENGLISH-0", viewValue: "ENGLISH" },
    { value: "HINDI-1", viewValue: "HINDI" },
  ];

  emailPattern = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  passwordPattern = new RegExp(
    /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}/
  );

  constructor(
    private registerService: AppService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  // registerForm= new FormGroup({
  //   firstname: new FormControl('',Validators.required),
  //   lastname: new FormControl('',Validators.required),
  //   email: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  //   cpassword: new FormControl('',Validators.required),

  // });

  ngOnInit(): void {

    
    // this.formGroup = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.minLength(this.minPw)]],
    //   cpassword: ['', [Validators.required]]
    // },
    // // {validator: passwordMatchValidator}
    // );
  }

  // get password() { return this.formGroup.get('password'); }
  // get cpassword() { return this.formGroup.get('cpassword'); }

  // onPasswordInput() {
  //   if (this.formGroup.hasError('passwordMismatch'))
  //     this.cpassword.setErrors([{'passwordMismatch': true}]);
  //   else
  //     this.cpassword.setErrors(null);
  // }

  onRegister(): void {
    console.log(this.registerForm.value);
    this.registerData = this.registerForm.value;
    this.registerService
      .registerApi(this.registerData)
      .subscribe((Response) => {
        console.log("registeration successful");
        this.router.navigate(["/login"]);
      });
  }

  //   userRegister() {
  //     console.log(this.user);
  //     if (
  //       this.user.name == "" ||
  //       this.user.contactNo == "" ||
  //       this.user.email == "" ||
  //       this.user.password == "" ||
  //       this.user.cpassword == ""
  //     ) {
  //       // this.errorMessage="Fields cannot be empty"
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Fields cannot be empty!",
  //       });
  //     }

  //     else if (this.user.password != this.user.cpassword) {
  //       console.log("password must be same")
  //     }
  //       // Swal.fire({
  //       //   icon: "error",
  //       //   title: "Oops...",
  //       //   text: "Password Must Be Same",
  //       // });
  //       // this.errorMessage = "Password Must Be Same";
  //      else {
  //       this.registerService.registerApi(this.user).subscribe(
  //         (data) => {
  //          Swal.fire("Successfully done !!", "User is Registered ", "success");
  //         },
  //        (error) =>
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "User Already Exist!",
  //           })
  //      );
  //      this.router.navigate(["/login"]);
  //     }
  //   }
  //   checked = false;

  //   email = new FormControl('', [Validators.required, Validators.email]);
  //     RememberMe = false;
  //     hide = true;

  //   getErrorMessage() {
  //     if (this.email.hasError('required')) {
  //       return 'You must enter a value';
  //     }

  //     return this.email.hasError('email') ? 'Not a valid email' : '';
  //   }
  // }
}
