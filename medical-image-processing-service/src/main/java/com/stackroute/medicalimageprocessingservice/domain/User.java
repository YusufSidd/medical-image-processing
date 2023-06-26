package com.stackroute.medicalimageprocessingservice.domain;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    @NotNull
    @NotBlank
    @Email
    private String email;

    //    @NotNull
//    @Size(min=2, message = "First Name should have atleast 2 characters")
    private String name;


    //    @NotNull
//    @Size(min=8, message = "First Name should have atleast 2 characters")
    private String password;

    //    @NotNull
//    @Size(min=8, message = "First Name should have atleast 2 characters")
    private String cpassword;




}