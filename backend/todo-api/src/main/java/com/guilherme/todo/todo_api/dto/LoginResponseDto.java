package com.guilherme.todo.todo_api.dto;

import com.guilherme.todo.todo_api.model.User;

public record LoginResponseDto(

    Long userId,
    String name,
    String email) {
  public static LoginResponseDto fromUser(User user) {
    return new LoginResponseDto(user.getId(), user.getName(), user.getEmail());
  }
}
