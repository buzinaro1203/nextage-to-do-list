package com.guilherme.todo.todo_api.todo.service;

import com.guilherme.todo.todo_api.todo.dto.TodoDTO;
import com.guilherme.todo.todo_api.todo.model.Todo;
import com.guilherme.todo.todo_api.user.model.User;
import com.guilherme.todo.todo_api.category.model.Category;

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