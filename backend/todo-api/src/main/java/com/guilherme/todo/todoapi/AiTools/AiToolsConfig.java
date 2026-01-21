package com.guilherme.todo.todoapi.AiTools;

import java.util.List;
import java.util.function.Function;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;

import com.guilherme.todo.todoapi.dto.AiSuggestion;
import com.guilherme.todo.todoapi.dto.TodoDTO;

@Configuration
public class AiToolsConfig {
  AiTools aiTools;

  public AiToolsConfig(AiTools aiTools) {
    this.aiTools = aiTools;
  }

  @Description("A funçao serve para criar uma tarefa a partir de uma sugestao da IA e ja injetando no banco de dados e retorna um TodoDTO")
  @Bean
  public Function<AiSuggestion, TodoDTO> parseAiSuggestionToTodo() {
    return aiTools::parseAiSuggestionToTodo;
  }

  @Description("A funçao serve para buscar todas as tarefas de um usuario por data de vencimento")
  @Bean
  public Function<DateFilter, List<TodoDTO>> getTodosPerDate() {
    return aiTools::getTodosPerDate;
  }

}
