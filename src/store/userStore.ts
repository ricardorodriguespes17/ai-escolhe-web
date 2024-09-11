import { create } from 'zustand'
import { UserType } from '../@types/UserTypes'

type Store = {
  user: UserType | null
  setUser: (user: UserType) => void
}

const useUserStore = create<Store>()((set) => ({
  user: {
    id: "1u1ojdi1jj10",
    createdAt: new Date(),
    email: "ricardo@aiescolhe.com",
    favorities: [],
    name: "Ricardo",
    surname: "Rodrigues",
    imageURL: "https://s2-techtudo.glbimg.com/LqCsNg5Gm6kHKW1sYFcYWQv3iJE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/e/GnvAPGSxmBICtAeFB2vA/cristiano-ronaldo-instagram.jpg",
    preferences: {
      autoSave: false,
      reciveEmail: false,
      theme: "light"
    }
  },
  setUser: (user) => set(state => ({
    ...state,
    user,
  })),
}))

export default useUserStore