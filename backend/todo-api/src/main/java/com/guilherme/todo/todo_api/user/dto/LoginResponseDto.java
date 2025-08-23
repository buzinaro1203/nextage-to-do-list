package com.guilherme.todo.todo_api.user.dto;

import com.guilherme.todo.todo_api.user.model.User;

public record LoginResponseDto(

    Long userId,
    String name,
    String email) {
  public static LoginResponseDto fromUser(User user) {
    return new LoginResponseDto(user.getId(), user.getName(), user.getEmail());
  }
}
