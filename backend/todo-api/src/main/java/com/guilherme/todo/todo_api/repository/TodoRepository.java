package com.guilherme.todo.todo_api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todo_api.model.User;
import com.guilherme.todo.todo_api.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUser(User user);
}