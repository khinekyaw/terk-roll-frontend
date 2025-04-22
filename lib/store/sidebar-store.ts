import { create } from "zustand"

export const SIDEBAR_MORE = "sidebar-more"
export const SIDEBAR_MORE_LANGUAGE = "sidebar-more/language"
export const SIDEBAR_MORE_DARK_MODE = "sidebar-more/dark-mode"
export const SIDEBAR_SEARCH = "sidebar-search"

interface SidebarState {
  sidebarSheetContentId: string
  setSidebarSheetContentId: (id: string) => void
  sidebarSheetOpen: boolean
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarSheetContentId: "",
  setSidebarSheetContentId: (id) =>
    set((state) => ({
      sidebarSheetContentId: state.sidebarSheetContentId === id ? "" : id,
      sidebarSheetOpen: Boolean(state.sidebarSheetContentId === id ? "" : id)
    })),
  sidebarSheetOpen: false,
}))
