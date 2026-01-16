package com.guilherme.todo.todoapi.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.guilherme.todo.todoapi.dto.AiSuggestion;

@Service
public class AiService {

    private final ChatClient chatClient;

    // O Starter cria automaticamente o 'builder' configurado com o Gemini
    public AiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public AiSuggestion chat(String message) {
        return chatClient.prompt()
                .system("Você é um assistente que ajuda a criar tarefas para um aplicativo"
                        + " Hoje é " + java.time.LocalDate.now() + "."
                        + " Responda APENAS com o JSON solicitado."
                        + " Regras:"
                        + " 1. Para dueDate: Use ESTRITAMENTE o formato YYYY-MM-DD. Se o usuário mencionar horas, ignore-as e use apenas a data referida."
                        + " 2. Para categoryName: Classifique estritamente entre: Pessoal, Trabalho, Estudo ou Outros."
                        + " 3. Para description: Se a tarefa exigir uma lista (ex: compras, ingredientes, passos), NÃO seja sucinto aqui. Liste todos os itens detalhadamente dentro deste campo."
                        + " 4. Para title: Seja curto e direto (verbo + ação).")
                .user(message)
                .call().entity(AiSuggestion.class);
    }
}