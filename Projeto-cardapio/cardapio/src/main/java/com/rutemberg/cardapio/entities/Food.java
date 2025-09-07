package com.rutemberg.cardapio.entities;

import com.rutemberg.cardapio.DTO.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Entity  //jpa
@Table(name = "foods") //jpa
@Getter   //vem do lombok
@Setter   //vem do lombok
@NoArgsConstructor  //vem do lombok
@AllArgsConstructor  //vem do lombok
@EqualsAndHashCode(of = "id") //vem do lombok
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String image;
    private Integer price;


    public Food(FoodRequestDTO data) {
        this.image = data.image();
        this.title = data.title();
        this.price = data.price();
    }
}
