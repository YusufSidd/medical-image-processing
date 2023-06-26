package com.stackroute.medicalimageprocessingservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class MedicalImageProcessingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicalImageProcessingServiceApplication.class, args);
	}

}
