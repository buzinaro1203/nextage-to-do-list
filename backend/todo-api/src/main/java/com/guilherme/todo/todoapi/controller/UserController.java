package com.guilherme.todo.todoapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.guilherme.todo.todoapi.dto.UserDto;
import com.guilherme.todo.todoapi.dto.UserResponseDto;
import com.guilherme.todo.todoapi.mapper.UserMapper;
import com.guilherme.todo.todoapi.model.User;
import com.guilherme.todo.todoapi.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserDto dto) {
        User user = userService.register(dto); // cria o User e salva no banco
        return ResponseEntity.ok(userMapper.toResponse(user)); // devolve sem senha
    }

}
