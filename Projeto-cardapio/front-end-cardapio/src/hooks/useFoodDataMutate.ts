// src/hooks/useFoodDataMutate.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios"
import type { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

// Interface para a requisição de DELETE
export interface FoodDataDelete {
    id: number
}

// Função para postar dados
const postData = async (data: FoodData): Promise<AxiosResponse<any>> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

// Função para deletar dados
const deleteData = async (data: FoodDataDelete): Promise<AxiosResponse<any>> => {
    const response = axios.delete(API_URL + '/food/delete/' + data.id);
    return response;
}

// Hook de mutação para POST (criação de item)
export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    })
    return mutate;
}

// Hook de mutação para DELETE (exclusão de item)
export function useFoodDeleteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    });
    return mutate;
}