package com.guilherme.todo.todoapi.AiTools;

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
}
