import { create } from 'zustand'
import { RecipeType } from '../@types/RecipeTypes'

type Store = {
  generatedRecipes: RecipeType[]
  setGeneratedRecipes: (recipes: RecipeType[]) => void
  ingredients: string[]
  addIngridient: () => void
  removeIngredient: (index: number) => void
  setIngredient: (value: string, index: number) => void
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

const recipeSlice = create<Store>()((set) => ({
  generatedRecipes: [],
  setGeneratedRecipes: (recipes) => set(state => ({
    ...state,
    generatedRecipes: recipes
  })),

  ingredients: [""],
  addIngridient: () => set(state => ({
    ...state, ingredients: state.ingredients.concat("")
  })),
  removeIngredient: (index) => set(state => ({
    ...state, ingredients: state.ingredients.filter((_, i) => i !== index)
  })),
  setIngredient: (value, index) => set(state => ({
    ...state, ingredients: state.ingredients.map((item, i) => {
      if (i === index) return value
      return item
    })
  })),

  isLoading: false,
  setLoading: (isLoading) => set(state => ({ ...state, isLoading, })),
}))

export default recipeSlice