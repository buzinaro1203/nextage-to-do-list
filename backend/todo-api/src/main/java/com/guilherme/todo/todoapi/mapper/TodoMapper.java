package com.guilherme.todo.todoapi.mapper;

import com.guilherme.todo.todoapi.dto.AiSuggestion;
import com.guilherme.todo.todoapi.dto.TodoDTO;
import com.guilherme.todo.todoapi.model.Category;
import com.guilherme.todo.todoapi.model.Todo;
import com.guilherme.todo.todoapi.model.User;
import org.springframework.stereotype.Component;

@Component
public class TodoMapper {
  // Converte Task -> TodoDTO
  public TodoDTO toDTO(Todo todo) {
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

  public Todo toEntity(TodoDTO dto, Category category, User user) {
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

  public Todo toEntity(AiSuggestion suggestion, Category category, User user) {
    if (suggestion == null)
      return null;

    Todo todo = new Todo();
    todo.setTitle(suggestion.title());
    todo.setDescription(suggestion.description());
    todo.setDueDate(java.time.LocalDate.parse(suggestion.dueDate()));
    todo.setCategory(category);
    todo.setUser(user);

    return todo;
  }
}