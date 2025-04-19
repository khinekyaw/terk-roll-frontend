import { create } from "zustand"

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
// sidebarSheetContentId: get().sidebarSheetContentId === id ? "" : id,
// sidebarSheetOpen: !Boolean(get().sidebarSheetContentId)
