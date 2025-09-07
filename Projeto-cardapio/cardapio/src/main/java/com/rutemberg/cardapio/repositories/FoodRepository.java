package com.rutemberg.cardapio.repositories;

import com.rutemberg.cardapio.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food,Long> {
}
