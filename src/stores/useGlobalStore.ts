import { create } from "zustand";

type StoreType = {
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
}

const useGlobalStore = create<StoreType>((set) => ({
  isLoading: false,
  setIsLoading: (b) => set((state) => ({ isLoading: b })),
}))

export default useGlobalStore;

