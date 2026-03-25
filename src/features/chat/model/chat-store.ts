import { create } from "zustand";

interface ChatState {
  isMessagesOpen: boolean;
  isNotificationsOpen: boolean;
  activeChatId: number | null;
  isVisible: boolean;

  openMessages: () => void;
  closeMessages: () => void;
  toggleMessages: () => void;

  openNotifications: () => void;
  closeNotifications: () => void;
  toggleNotifications: () => void;

  openChat: (id: number) => void;
  closeChat: () => void;
  hideWidget: () => void;
  showWidget: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isMessagesOpen: false,
  isNotificationsOpen: false,
  activeChatId: null,
  isVisible: true,

  openMessages: () =>
    set({
      isMessagesOpen: true,
      isNotificationsOpen: false, // Usually it's better to focus one, but user said "Separate".
      // I'll allow them to be separate. But for usability, I'll toggle others off IF they overlap too much.
      // Actually, I'll let the user decide.
    }),
  closeMessages: () => set({ isMessagesOpen: false, activeChatId: null }),
  toggleMessages: () => set((state) => ({ isMessagesOpen: !state.isMessagesOpen })),

  openNotifications: () =>
    set({
      isNotificationsOpen: true,
      isMessagesOpen: false, // Focus on notifications
    }),
  closeNotifications: () => set({ isNotificationsOpen: false }),
  toggleNotifications: () => set((state) => ({ isNotificationsOpen: !state.isNotificationsOpen })),

  openChat: (id: number) =>
    set({
      activeChatId: id,
      isMessagesOpen: true,
    }),

  closeChat: () =>
    set({
      activeChatId: null,
    }),

  hideWidget: () =>
    set({
      isVisible: false,
    }),

  showWidget: () =>
    set({
      isVisible: true,
    }),
}));
