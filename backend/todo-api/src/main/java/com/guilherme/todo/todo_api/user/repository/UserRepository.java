package com.guilherme.todo.todo_api.user.repository;

import com.guilherme.todo.todo_api.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
