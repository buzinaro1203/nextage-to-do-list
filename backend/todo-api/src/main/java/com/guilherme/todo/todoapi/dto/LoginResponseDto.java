package com.guilherme.todo.todoapi.dto;

public record LoginResponseDto(

    Long userId,
    String name,
    String email) {

}
