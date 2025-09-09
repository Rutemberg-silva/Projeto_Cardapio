// src/interface/FoodData.ts
export interface FoodData {
    id?: number,
    title: string,
    image: string,
    price: number
}

// Interface para a deleção
export interface FoodDataDelete {
    id: number
}