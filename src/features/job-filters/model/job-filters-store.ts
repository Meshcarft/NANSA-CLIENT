import { create } from "zustand";
import { persist } from "zustand/middleware";

interface JobFiltersState {
  isCollapsed: boolean;
  toggle: () => void;
  expand: () => void;
  collapse: () => void;
}

export const useJobFiltersStore = create<JobFiltersState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      toggle: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
      expand: () => set({ isCollapsed: false }),
      collapse: () => set({ isCollapsed: true }),
    }),
    {
      name: "job-filters-storage",
    },
  ),
);
