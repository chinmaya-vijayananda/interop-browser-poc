import { create } from 'zustand'

interface UserState {
  user: { name: string } | null;
  setUser: (user: { name: string } | null) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
