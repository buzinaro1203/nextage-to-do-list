package com.guilherme.todo.todoapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todoapi.model.Todo;
import com.guilherme.todo.todoapi.model.User;

public interface TodoRepository extends JpaRepository<Todo, Long> {
  List<Todo> findByUser(User user);

  List<Todo> findByUserAndTitleContainingIgnoreCase(User user, String title);

  List<Todo> findByUserAndDueDateBetween(User user, java.time.LocalDate startDate, java.time.LocalDate endDate);

  Optional<Todo> findByIdAndUser(Long id, User user);
}