package com.guilherme.todo.todo_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override

      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // permite todos os endpoints
            .allowedOrigins("http://localhost:5173", "*") // porta do React
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*"); // permite todos os cabeçalhos
      }
    };
  }
}