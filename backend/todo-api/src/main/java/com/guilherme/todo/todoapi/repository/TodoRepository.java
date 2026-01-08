package com.guilherme.todo.todoapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todoapi.model.Todo;
import com.guilherme.todo.todoapi.model.User;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUser(User user);
}