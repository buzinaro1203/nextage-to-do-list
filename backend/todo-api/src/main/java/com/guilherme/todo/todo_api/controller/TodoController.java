package com.guilherme.todo.todo_api.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.guilherme.todo.todo_api.service.TodoService;
import com.guilherme.todo.todo_api.model.User;
import com.guilherme.todo.todo_api.service.UserService;
import com.guilherme.todo.todo_api.dto.TodoDTO;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

  private final TodoService todoService;
  private final UserService userService;

  public TodoController(TodoService todoService, UserService userService) {
    this.todoService = todoService;
    this.userService = userService;
  }

  @GetMapping
  public List<TodoDTO> getTodos(@AuthenticationPrincipal UserDetails userDetails) {
    User user = userService.findByEmail(userDetails.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));
    return todoService.getTodosForUser(user);
  }

  @PostMapping
  public TodoDTO createTodo(@RequestBody TodoDTO todoDTO,
      @AuthenticationPrincipal UserDetails userDetails) {
    User user = userService.findByEmail(userDetails.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));
    return todoService.createTodoForUser(todoDTO, user);
  }

  @PutMapping("/{id}")
  public TodoDTO updateTodo(@PathVariable Long id,
      @RequestBody TodoDTO dto,
      @AuthenticationPrincipal UserDetails userDetails) {
    User user = userService.findByEmail(userDetails.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));
    return todoService.updateTodo(id, dto, user);
  }

  @DeleteMapping("/{id}")
  public void deleteTodo(@PathVariable Long id,
      @AuthenticationPrincipal UserDetails userDetails) {
    User user = userService.findByEmail(userDetails.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));
    todoService.deleteTodo(id, user);
  }
}
