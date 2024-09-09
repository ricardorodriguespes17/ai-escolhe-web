import { create } from 'zustand'

type Store = {
  ingredients: string[]
  addIngridient: () => void
  removeIngredient: (index: number) => void
  setIngredient: (value: string, index: number) => void
}

const ingridientSlice = create<Store>()((set) => ({
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
}))

export default ingridientSlice