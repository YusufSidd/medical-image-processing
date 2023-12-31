package com.stackroute.medicalimageprocessingservice.repository;


import com.stackroute.medicalimageprocessingservice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public User findByEmail(String email);

    public User findByEmailAndPassword(String email, String password);
}
