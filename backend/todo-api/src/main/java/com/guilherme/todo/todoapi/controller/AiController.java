package com.guilherme.todo.todoapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.guilherme.todo.todoapi.dto.AiSuggestion;
import com.guilherme.todo.todoapi.service.AiService;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    // Exemplo de uso: GET /api/ai/chat?message=Olá
    @GetMapping("/chat")
    public AiSuggestion chat(@RequestParam String message) {
        return aiService.chat(message);
    }
}