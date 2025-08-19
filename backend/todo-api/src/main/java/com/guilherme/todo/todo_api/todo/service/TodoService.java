package com.guilherme.todo.todo_api.todo.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.guilherme.todo.todo_api.category.repository.CategoryRepository;
import com.guilherme.todo.todo_api.todo.dto.TodoDTO;
import com.guilherme.todo.todo_api.todo.model.Todo;
import com.guilherme.todo.todo_api.todo.repository.TodoRepository;

@Service
public class TodoService {

  private final TodoRepository todoRepository;
  private final CategoryRepository categoryRepository;

  public TodoService(TodoRepository todoRepository, CategoryRepository categoryRepository) {
    this.todoRepository = todoRepository;
    this.categoryRepository = categoryRepository;
  }

  public List<TodoDTO> getAllTodos() {
    return todoRepository.findAll()
        .stream()
        .map(TodoConverter::toDTO)
        .collect(Collectors.toList());
  }

  public TodoDTO createTodo(TodoDTO dto) {
    var category = categoryRepository.findById(dto.getCategoryId())
        .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
    Todo todo = TodoConverter.toEntity(dto, category);
    todo.setCreatedAt(LocalDate.now());
    todo.setUpdatedAt(null);
    Todo savedTodo = todoRepository.save(todo);
    return TodoConverter.toDTO(savedTodo);
  }

  public TodoDTO updateTodo(Long id, TodoDTO dto) {
    return todoRepository.findById(id)
        .map(todo -> {
          todo.setTitle(dto.getTitle());
          todo.setDescription(dto.getDescription());
          todo.setCompleted(dto.isCompleted());
          todo.setUpdatedAt(LocalDate.now());
          todo.setDueDate(dto.getDueDate());

          if (dto.getCategoryId() != null) {
            var category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
            todo.setCategory(category);
          }

          if (dto.isCompleted()) {
            todo.setCompletedAt(LocalDate.now());
          } else {
            todo.setCompletedAt(null);
          }

          return TodoConverter.toDTO(todoRepository.save(todo));
        }).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
  }

  public void deleteTodo(Long id) {
    if (!todoRepository.existsById(id)) {
      throw new RuntimeException("Tarefa não encontrada");
    }
    todoRepository.deleteById(id);
  }
}