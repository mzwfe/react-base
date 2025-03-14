import { create } from 'zustand'
import { getCurrentInfoXHR, loginXHR } from '../service'
import { infoType } from '../types/serviceTypes'

type userInfoState = {
  userInfo: infoType | undefined
  setUserInfo: (userInfo: infoType) => void
  fetchUserInfo: (username: string, password: string) => Promise<void>
  getCurrentInfo: () => Promise<void>
}

export const useUserInfoStore = create<userInfoState>((set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo: infoType) => set(() => ({ userInfo })),

  fetchUserInfo: async (username: string, password: string) => {
    const userInfo = await loginXHR(username, password)

    set(() => ({userInfo}))
  },

  getCurrentInfo: async () => {
    const userInfo = await getCurrentInfoXHR()

    set(() => ({userInfo}))
  }

}))