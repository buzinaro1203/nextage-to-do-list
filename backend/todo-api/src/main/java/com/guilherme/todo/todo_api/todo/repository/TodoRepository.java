package com.guilherme.todo.todo_api.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todo_api.todo.model.Todo;
import com.guilherme.todo.todo_api.user.model.User;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUser(User user);
}