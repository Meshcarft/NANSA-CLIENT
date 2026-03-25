import { create } from "zustand";

interface AgentState {
  isOpen: boolean;
  isMaximized: boolean;
  width: number;
  toggle: () => void;
  open: () => void;
  close: () => void;
  toggleMaximize: () => void;
  setWidth: (width: number) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  isOpen: false,
  isMaximized: false,
  width: 600, // Widened default
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggleMaximize: () => set((state) => ({ isMaximized: !state.isMaximized })),
  setWidth: (width) => set({ width }),
}));
