import { create } from 'zustand'
import { RecipeType } from '../@types/RecipeTypes'

type Store = {
  generatedRecipes: RecipeType[]
  setGeneratedRecipes: (recipes: RecipeType[]) => void
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

const useRecipeStore = create<Store>()((set) => ({
  generatedRecipes: [],
  setGeneratedRecipes: (recipes) => set(state => ({
    ...state,
    generatedRecipes: recipes
  })),

  isLoading: false,
  setLoading: (isLoading) => set(state => ({ ...state, isLoading, })),
}))

export default useRecipeStore