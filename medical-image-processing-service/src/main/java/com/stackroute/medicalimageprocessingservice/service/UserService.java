package com.stackroute.medicalimageprocessingservice.service;
import com.stackroute.medicalimageprocessingservice.domain.User;
import com.stackroute.medicalimageprocessingservice.exception.UserAlreadyExistException;
import com.stackroute.medicalimageprocessingservice.exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    public User saveUser(User user) throws UserAlreadyExistException;

    public User login (User user) throws UserNotFoundException;
    public User loadUserByUsername(String username) throws UserNotFoundException;

    public List<User> allUsers();

    public String deleteUserById(String username) throws UserNotFoundException;

    public User update(User user) ;

//    public User uploadImg(String email, MultipartFile file) throws UserNotFoundException;

}
