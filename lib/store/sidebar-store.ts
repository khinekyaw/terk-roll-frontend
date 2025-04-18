import { create } from "zustand"

interface SidebarState {
  sidebarSheetOpen: boolean
  setSidebarSheetOpen: (open: boolean) => void
  toggleSidebarSheetOpen: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarSheetOpen: false,
  setSidebarSheetOpen: (open) => set({ sidebarSheetOpen: open }),
  toggleSidebarSheetOpen: () => set((state) => ({ sidebarSheetOpen: !state.sidebarSheetOpen })),
})) 