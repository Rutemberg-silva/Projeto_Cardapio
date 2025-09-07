package com.rutemberg.cardapio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Locale;

@SpringBootApplication
public class CardapioApplication {

	public static void main(String[] args) {
		// A linha foi movida para o método main
		Locale.setDefault(Locale.US);

		SpringApplication.run(CardapioApplication.class, args);
	}
}
