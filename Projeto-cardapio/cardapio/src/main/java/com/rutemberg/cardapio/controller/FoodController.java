package com.rutemberg.cardapio.controller;

import com.rutemberg.cardapio.DTO.FoodRequestDTO;
import com.rutemberg.cardapio.DTO.FoodResponseDTO;
import com.rutemberg.cardapio.entities.Food;
import com.rutemberg.cardapio.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
                            //entidade transformada para DTO
        List<FoodResponseDTO> foodList =  repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        //DTO transformado para entidade
        Food foodData = new Food(data);
        repository.save(foodData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/delete/{id}")
    public void deleteFoodById(@PathVariable  Long id) {
        repository.deleteById(id);
    }
}
