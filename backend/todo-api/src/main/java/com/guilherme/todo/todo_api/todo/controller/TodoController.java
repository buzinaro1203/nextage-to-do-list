package com.guilherme.todo.todo_api.todo.controller;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.guilherme.todo.todo_api.todo.model.Todo;
import com.guilherme.todo.todo_api.todo.repository.TodoRepository;

@RestController
@RequestMapping("/api/todos") // Permite acesso do front-end
public class TodoController {

  private final TodoRepository todoRepository;

  public TodoController(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  // GET - Listar todos
  @GetMapping
  public List<Todo> getAllTodos() {
    return todoRepository.findAll();
  }

  // POST - Criar novo
  @PostMapping
  public Todo createTodo(@RequestBody Todo todo) {
    return todoRepository.save(todo);
  }

  // PUT - Atualizar
  @PutMapping("/{id}")
  public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
    return todoRepository.findById(id)
        .map(todo -> {
          todo.setTitle(updatedTodo.getTitle());
          todo.setDescription(updatedTodo.getDescription());
          todo.setCompleted(updatedTodo.isCompleted());
          todo.setUpdatedAt(LocalDateTime.now());
          if (updatedTodo.isCompleted()) {
            todo.setCompletedAt(LocalDateTime.now());
          } else {
            todo.setCompletedAt(null); // Reset completedAt if not completed
          }
          return todoRepository.save(todo);
        }).orElseThrow(() -> new RuntimeException("Todo não encontrado"));
  }

  // DELETE - Remover
  @DeleteMapping("/{id}")
  public void deleteTodo(@PathVariable Long id) {
    todoRepository.deleteById(id);
  }
}
