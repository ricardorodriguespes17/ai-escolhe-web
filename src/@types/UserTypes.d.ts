import { RecipeType } from "./RecipeTypes"

export type UserType = {
  id: string
  imageURL?: string
  name: string
  email: string
  surname: string
  createdAt: Date
  favorities: RecipeType[]
  preferences: UserPreferencesType
}

export type UserPreferencesType = {
  theme: "light" | "dark"
  reciveEmail: boolean
  autoSave: boolean
}