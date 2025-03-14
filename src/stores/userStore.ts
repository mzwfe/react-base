import { create } from 'zustand'
import { infoType } from '../types/serviceTypes'

type userInfoState = {
  userInfo: infoType | undefined
  setUserInfo: (userInfo: infoType) => void
}

export const useUserInfoStore = create<userInfoState>((set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo: infoType) => set(() => ({ userInfo })),
}))