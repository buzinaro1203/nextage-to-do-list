package com.guilherme.todo.todo_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.todo.todo_api.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
  // Aqui você pode adicionar métodos personalizados se necessário
  // Exemplo: List<Category> findByName(String name);

}
