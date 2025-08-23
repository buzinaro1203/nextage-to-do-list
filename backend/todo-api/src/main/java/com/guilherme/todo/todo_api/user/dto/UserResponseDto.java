package com.guilherme.todo.todo_api.user.dto;

import com.guilherme.todo.todo_api.user.model.User;

public record UserResponseDto(
    Long id,
    String name,
    String email) {
  public static UserResponseDto fromEntity(User user) {
    return new UserResponseDto(user.getId(), user.getName(), user.getEmail());
  }

}
