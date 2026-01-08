package com.guilherme.todo.todoapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilherme.todo.todoapi.model.Category;
import com.guilherme.todo.todoapi.repository.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

  private final CategoryRepository categoryRepository;

  public CategoryController(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  // Criar nova categoria
  @PostMapping
  public ResponseEntity<Category> createCategory(@RequestBody Category category) {
    Category savedCategory = categoryRepository.save(category);
    return ResponseEntity.ok(savedCategory);
  }

  // Listar todas
  @GetMapping
  public ResponseEntity<List<Category>> getAllCategories() {
    return ResponseEntity.ok(categoryRepository.findAll());
  }

  // Buscar por ID
  @GetMapping("/{id}")
  public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
    Optional<Category> category = categoryRepository.findById(id);
    return category.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
  }

  // Atualizar categoria
  @PutMapping("/{id}")
  public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
    return categoryRepository.findById(id)
        .map(category -> {
          category.setName(categoryDetails.getName());
          Category updated = categoryRepository.save(category);
          return ResponseEntity.ok(updated);
        })
        .orElse(ResponseEntity.notFound().build());
  }

  // Deletar categoria
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
    return categoryRepository.findById(id)
        .map(category -> {
          categoryRepository.delete(category);
          return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
