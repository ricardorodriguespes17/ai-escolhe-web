import api from "./api"
import { AxiosResponse } from "axios"
import { CreateRecipeType, RecipeType } from "../@types/RecipeTypes"

type GenerateRecipeProps = {
  ingredients: string[]
}

export const generateRecipe = async (data: GenerateRecipeProps) => {
  return api.post<{}, AxiosResponse<{ recipes: RecipeType[] }>>("/recipe/generate", data)
}

export const getRecipe = async (data: { id: string }) => {
  return api.get<{}, AxiosResponse<RecipeType>>(`/recipe/${data.id}`)
}

export const addRecipe = async (data: CreateRecipeType) => {
  return api.post<{}, AxiosResponse<RecipeType>>("/recipe", data)
}

export const updateRecipe = async (data: RecipeType) => {
  return api.put<{}, AxiosResponse<RecipeType>>("/recipe", data)
}

export const deleteRecipe = async (data: { id: string }) => {
  return api.delete<{}, AxiosResponse<void>>(`/recipe/${data.id}`)
}