package com.guilherme.todo.todo_api.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilherme.todo.todo_api.todo.service.TodoService;
import com.guilherme.todo.todo_api.todo.dto.TodoDTO;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

  private final TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping
  public List<TodoDTO> getAllTodos() {
    return todoService.getAllTodos();
  }

  @PostMapping
  public TodoDTO createTask(@RequestBody TodoDTO dto) {
    return todoService.createTodo(dto);
  }

  @PutMapping("/{id}")
  public TodoDTO updateTask(@PathVariable Long id, @RequestBody TodoDTO dto) {
    return todoService.updateTodo(id, dto);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    todoService.deleteTodo(id);
  }
}