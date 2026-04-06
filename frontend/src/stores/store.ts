import { create } from "zustand"
const API = "http://localhost:8000";

type CounterStore = {
  count: number | null
  increment: () => void
  incrementAsync: () => Promise<void>
  decrement: () => void
  decrementAsync: () => Promise<void>
  loadCount: () => Promise<void>
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: null,
  increment: () => {
    set((state) => ({ count: (state.count ?? 0) + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: (state.count ?? 0) - 1 }));
  },
  loadCount: async () => {
    const res = await fetch(`${API}/count`);
    const data = await res.json();
    set({ count: data.count });
  },

  incrementAsync: async () => {
    const res = await fetch(`${API}/count/increment`, { method: "POST" });
    const data = await res.json();
    set({ count: data.count });
  },

  decrementAsync: async () => {
    const res = await fetch(`${API}/count/decrement`, { method: "POST" });
    const data = await res.json();
    set({ count: data.count });
  },
}))