package com.stackroute.medicalimageprocessingservice.config;

import com.stackroute.medicalimageprocessingservice.domain.User;

import java.util.Map;

public interface JWTTokenGenerator {
    Map<String, String> generateToken(User user);

}
