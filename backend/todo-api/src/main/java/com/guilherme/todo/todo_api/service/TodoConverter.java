package com.guilherme.todo.todo_api.service;

import com.guilherme.todo.todo_api.dto.TodoDTO;
import com.guilherme.todo.todo_api.model.Todo;
import com.guilherme.todo.todo_api.model.Category;
import com.guilherme.todo.todo_api.model.User;

public class TodoConverter {
  // Converte Task -> TodoDTO
  public static TodoDTO toDTO(Todo todo) {
    if (todo == null)
      return null;

    return new TodoDTO(
        todo.getId(),
        todo.getTitle(),
        todo.getDescription(),
        todo.isCompleted(),
        todo.getDueDate(),
        todo.getCategory() != null ? todo.getCategory().getId() : null,
        todo.getCategory() != null ? todo.getCategory().getName() : null,
        todo.getCreatedAt(),
        todo.getUpdatedAt() != null ? todo.getUpdatedAt() : null,
        todo.getCompletedAt(),
        todo.getUser().getId(),
        todo.getUser().getEmail());
  }

  // Converte TodoDTO -> Todo, recebendoyCategory category correspondente
  public static Todo toEntity(TodoDTO dto, Category category, User user) {
    if (dto == null)
      return null;

    Todo todo = new Todo();
    todo.setId(dto.getId());
    todo.setTitle(dto.getTitle());
    todo.setDescription(dto.getDescription());
    todo.setCompleted(dto.isCompleted());
    todo.setDueDate(dto.getDueDate());
    todo.setCompletedAt(dto.getCompletedAt());
    todo.setCategory(category);
    todo.setUser(user);

    return todo;
  }
}