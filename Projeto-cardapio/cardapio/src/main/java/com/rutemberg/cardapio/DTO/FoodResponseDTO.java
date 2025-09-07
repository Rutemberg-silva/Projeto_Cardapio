package com.rutemberg.cardapio.DTO;

import com.rutemberg.cardapio.entities.Food;

public record FoodResponseDTO (Long id, String title, String image, Integer price){
    public FoodResponseDTO(Food food){
        this(food.getId(),food.getTitle(),food.getImage(),food.getPrice()); //usando lombok
    }
}
