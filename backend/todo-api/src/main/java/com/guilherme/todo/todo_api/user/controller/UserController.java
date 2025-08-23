package com.guilherme.todo.todo_api.user.controller;

import com.guilherme.todo.todo_api.user.dto.LoginDto;
import com.guilherme.todo.todo_api.user.dto.LoginResponseDto;
import com.guilherme.todo.todo_api.user.dto.UserDto;
import com.guilherme.todo.todo_api.user.dto.UserResponseDto;
import com.guilherme.todo.todo_api.user.model.User;

import com.guilherme.todo.todo_api.user.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserDto dto) {
        User user = userService.register(dto); // cria o User e salva no banco
        return ResponseEntity.ok(UserResponseDto.fromEntity(user)); // devolve sem senha
    }

}
