import { create } from "zustand"

interface SidebarState {
  sidebarSheetContentId: string
  setSidebarSheetContentId: (id: string) => void
  sidebarSheetOpen: boolean
}

export const useSidebarStore = create<SidebarState>((set, get) => ({
  sidebarSheetContentId: "",
  setSidebarSheetContentId: (id) => set({ 
    sidebarSheetContentId: get().sidebarSheetContentId === id ? "" : id,
    sidebarSheetOpen: get().sidebarSheetContentId !== id
  }),
  sidebarSheetOpen: false,
})) 