package com.guilherme.todo.todo_api.todo.dto;

import java.time.LocalDate;

public class TodoDTO {
  private Long id;
  private String title;
  private String description;
  private boolean completed;
  private LocalDate dueDate;
  private LocalDate createdAt;
  private LocalDate updatedAt;
  private LocalDate completedAt;

  /**
   * @return the createdAt
   */
  public LocalDate getCreatedAt() {
    return createdAt;
  }

  /**
   * @param createdAt the createdAt to set
   */
  public void setCreatedAt(LocalDate createdAt) {
    this.createdAt = createdAt;
  }

  /**
   * @return the updatedAt
   */
  public LocalDate getUpdatedAt() {
    return updatedAt;
  }

  /**
   * @param updatedAt the updatedAt to set
   */
  public void setUpdatedAt(LocalDate updatedAt) {
    this.updatedAt = updatedAt;
  }

  /**
   * @return the completedAt
   */
  public LocalDate getCompletedAt() {
    return completedAt;
  }

  /**
   * @param completedAt the completedAt to set
   */
  public void setCompletedAt(LocalDate completedAt) {
    this.completedAt = completedAt;
  }

  private Long categoryId; // apenas o id da categoria
  private String categoryName; // opcional, se quiser enviar o nome da categoria

  // Construtores
  public TodoDTO() {
  }

  public TodoDTO(Long id, String title, String description, boolean completed, LocalDate dueDate, Long categoryId,
      String categoryName, LocalDate createdAt, LocalDate updatedAt, LocalDate completedAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.createdAt = LocalDate.now(); // Definindo data de criação como hoje
    this.updatedAt = LocalDate.now(); // Definindo data de atualização como hoje
    this.completedAt = completed ? LocalDate.now() : null; // Se estiver completo,

  }

  // Getters e Setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isCompleted() {
    return completed;
  }

  public void setCompleted(boolean completed) {
    this.completed = completed;
  }

  public LocalDate getDueDate() {
    return dueDate;
  }

  public void setDueDate(LocalDate dueDate) {
    this.dueDate = dueDate;
  }

  public Long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }

  public String getCategoryName() {
    return categoryName;
  }

  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }
}
