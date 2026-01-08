package com.guilherme.todo.todoapi.mapper;

import org.springframework.stereotype.Component;

import com.guilherme.todo.todoapi.dto.LoginResponseDto;
import com.guilherme.todo.todoapi.dto.UserDto;
import com.guilherme.todo.todoapi.dto.UserResponseDto;
import com.guilherme.todo.todoapi.model.User;

@Component
public class UserMapper {

  public User toEntity(UserDto dto) {
    if (dto == null)
      return null;
    User user = new User();
    user.setName(dto.getName());
    user.setEmail(dto.getEmail());
    user.setPassword(dto.getPassword());
    return user;
  }

  public UserResponseDto toResponse(User user) {
    if (user == null) {
      return null;
    }
    return new UserResponseDto(user.getId(), user.getName(), user.getEmail());
  }

  public LoginResponseDto toLoginResponse(User user) {
    if (user == null) {
      return null;
    }
    return new LoginResponseDto(user.getId(), user.getName(), user.getEmail());
  }
}
