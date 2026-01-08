package com.guilherme.todo.todo_api.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.guilherme.todo.todo_api.model.Category;
import com.guilherme.todo.todo_api.model.User;
import com.guilherme.todo.todo_api.repository.CategoryRepository;
import com.guilherme.todo.todo_api.dto.TodoDTO;
import com.guilherme.todo.todo_api.model.Todo;
import com.guilherme.todo.todo_api.repository.TodoRepository;

@Service
public class TodoService {

  private final TodoRepository todoRepository;
  private final CategoryRepository categoryRepository;

  public TodoService(TodoRepository todoRepository, CategoryRepository categoryRepository) {
    this.todoRepository = todoRepository;
    this.categoryRepository = categoryRepository;
  }

  public List<TodoDTO> getTodosForUser(User user) {
    return todoRepository.findByUser(user)
        .stream()
        .map(TodoConverter::toDTO)
        .collect(Collectors.toList());
  }

  public TodoDTO createTodoForUser(TodoDTO dto, User user) {
    Category category = null;

    if (dto.getCategoryId() != null) {
      category = categoryRepository.findById(dto.getCategoryId())
          .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
    }
    Todo todo = TodoConverter.toEntity(dto, category, user);
    todo.setCreatedAt(LocalDate.now());
    todo.setUpdatedAt(null);
    Todo savedTodo = todoRepository.save(todo);
    return TodoConverter.toDTO(savedTodo);
  }

  public List<TodoDTO> getAllTodos() {
    return todoRepository.findAll()
        .stream()
        .map(TodoConverter::toDTO)
        .collect(Collectors.toList());
  }

  // Atualiza um todo de um usuário (valida que pertence ao usuário)
  public TodoDTO updateTodo(Long id, TodoDTO dto, User user) {
    return todoRepository.findById(id)
        .map(todo -> {
          if (!todo.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Não autorizado");
          }

          todo.setTitle(dto.getTitle());
          todo.setDescription(dto.getDescription());
          todo.setCompleted(dto.isCompleted());
          todo.setUpdatedAt(LocalDate.now());
          todo.setDueDate(dto.getDueDate());

          if (dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
            todo.setCategory(category);
          }

          todo.setCompletedAt(dto.isCompleted() ? LocalDate.now() : null);
          return TodoConverter.toDTO(todoRepository.save(todo));
        }).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
  }

  // Deleta um todo de um usuário
  public void deleteTodo(Long id, User user) {
    Todo todo = todoRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    if (!todo.getUser().getId().equals(user.getId())) {
      throw new RuntimeException("Não autorizado");
    }
    todoRepository.deleteById(id);
  }

}