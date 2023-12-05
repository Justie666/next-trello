import { create } from 'zustand'

interface MobileSidebarState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useMobileSidebarStore = create<MobileSidebarState>()(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
