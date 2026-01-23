package com.guilherme.todo.todoapi.dto;

// Este record pode ser usado para encapsular o intervalo de datas para consulta de tarefas pelo iatools
public record DateQuery(String startDate, String endDate) {

}
