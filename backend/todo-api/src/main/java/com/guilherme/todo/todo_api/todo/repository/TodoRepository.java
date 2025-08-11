package com.guilherme.todo.todo_api.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.guilherme.todo.todo_api.todo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}