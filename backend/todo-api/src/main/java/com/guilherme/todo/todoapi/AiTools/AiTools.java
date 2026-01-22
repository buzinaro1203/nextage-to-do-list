package com.guilherme.todo.todoapi.AiTools;

import com.guilherme.todo.todoapi.model.Category;
import com.guilherme.todo.todoapi.repository.CategoryRepository;
import com.guilherme.todo.todoapi.repository.TodoRepository;
import com.guilherme.todo.todoapi.repository.UserRepository;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.guilherme.todo.todoapi.dto.AiSuggestion;
import com.guilherme.todo.todoapi.dto.TodoDTO;
import com.guilherme.todo.todoapi.mapper.TodoMapper;
import com.guilherme.todo.todoapi.model.Todo;
import com.guilherme.todo.todoapi.model.User;

@Component
public class AiTools {
  private final CategoryRepository categoryRepository;
  private final TodoMapper todoMapper;
  private final UserRepository userRepository;
  private final TodoRepository todoRepository;

  public AiTools(CategoryRepository categoryRepository, TodoMapper todoMapper, UserRepository userRepository,
      TodoRepository todoRepository) {
    this.categoryRepository = categoryRepository;
    this.todoMapper = todoMapper;
    this.userRepository = userRepository;
    this.todoRepository = todoRepository;
  }

  public TodoDTO parseAiSuggestionToTodo(AiSuggestion suggestion) {
    if (suggestion == null)
      return null;
    List<Category> categories = categoryRepository.findByName(suggestion.categoryName());

    Category category = categories.isEmpty() ? null : categories.get(0);
    String email = SecurityContextHolder.getContext().getAuthentication().getName();
    User user = userRepository.findByEmail(email).orElseThrow();
    Todo todo = todoMapper.toEntity(suggestion, category, user);
    TodoDTO savedTodo = todoMapper.toDTO(todoRepository.save(todo));
    return savedTodo;
  }

  public List<TodoDTO> getTodosPerDate(DateFilter request) {
    String email = SecurityContextHolder.getContext().getAuthentication().getName();
    User user = userRepository.findByEmail(email).orElseThrow();
    java.time.LocalDate startDate = java.time.LocalDate.parse(request.StartDate());
    java.time.LocalDate endDate = java.time.LocalDate.parse(request.EndDate());
    return todoRepository.findByUserAndDueDateBetween(user, startDate, endDate).stream().map(todoMapper::toDTO)
        .toList();
  }
}