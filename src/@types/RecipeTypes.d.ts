export type RecipeType = {
  id: string
  name: string
  description: string
  preparationTime: number
  ingredients: {
    name: string
    quantity: string
    comment?: string
  }[]
  steps: string[]
  categories: string[]
  kitchenware: string[]
}

export type CreateRecipeType = {
  name: string
  description: string
  preparationTime: number
  ingredients: IngredientType[]
  steps: string[]
  categories: string[]
  kitchenware: string[]
  createdBy: string
}