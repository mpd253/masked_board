import { useSyncExternalStore } from 'react'
import { mockUser } from './mockUser'
import type { User } from './mockUser'

let currentUser = mockUser
const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export const useUser = () => useSyncExternalStore(subscribe, () => currentUser)

export const updateUser = (user: User) => {
  currentUser = user
  listeners.forEach((listener) => listener())
}
