package com.stackroute.medicalimageprocessingservice.service;

import com.stackroute.medicalimageprocessingservice.domain.User;
import com.stackroute.medicalimageprocessingservice.exception.UserAlreadyExistException;
import com.stackroute.medicalimageprocessingservice.exception.UserNotFoundException;
import com.stackroute.medicalimageprocessingservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User saveUser(User user) throws UserAlreadyExistException {
        user.setName(user.getName());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        userRepository.save(user);
        return user;
    }

    public User login(User user) throws UserNotFoundException{
        User user2= userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());

        if(user2 == null){
            throw new UserNotFoundException();
        }
        return user2;
    }

    @Override
    public List<User> allUsers(){
        return userRepository.findAll();
    }

    @Override
    public User loadUserByUsername(String username) throws UserNotFoundException {
        User authuser = userRepository.findByEmail(username);
        if (authuser == null) {
            throw new UserNotFoundException(" UsernameNotFoundException: " + username);
        }
        return authuser;
    }
    @Override
    public String deleteUserById(String email)throws UserNotFoundException{

        User byEmail = userRepository.findByEmail(email);
            System.out.println(byEmail);
            if(byEmail == null){
                return "Email Not Found";
            }
            userRepository.deleteById(email);
            return "Deleted Successfully";

    }

    @Override
    public User update(User user){
        User users = userRepository.findByEmail(user.getEmail());
        users.setName(user.getName());
        userRepository.save(users);
        return users;
    }

}
