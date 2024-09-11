import { create } from 'zustand'
import { UserType } from '../@types/UserTypes'

type Store = {
  user: UserType | null
  setUser: (user: UserType | null) => void
}

const useUserStore = create<Store>()((set) => ({
  user: null,
  setUser: (user) => set(state => ({
    ...state,
    user,
  })),
}))

export default useUserStore