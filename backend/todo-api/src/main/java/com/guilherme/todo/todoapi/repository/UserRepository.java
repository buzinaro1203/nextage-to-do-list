package com.guilherme.todo.todoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todoapi.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
