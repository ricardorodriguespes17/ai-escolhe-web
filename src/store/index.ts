import { create } from "zustand"
import recipeSlice from "./recipeSlice"
import { persist } from "zustand/middleware"
import ingridientSlice from "./ingredientsSlice"

export const useStore = create(
  persist(() => ({
    ...recipeSlice(),
    ...ingridientSlice(),
  }),
    { name: 'ai-escolhe-store' },
  ),
)