import { create } from "zustand";

interface AgentState {
  isOpen: boolean;
  width: number;
  toggle: () => void;
  open: () => void;
  close: () => void;
  setWidth: (width: number) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  isOpen: false,
  width: 448, // Default max-w-md equivalent (28rem)
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setWidth: (width) => set({ width }),
}));
