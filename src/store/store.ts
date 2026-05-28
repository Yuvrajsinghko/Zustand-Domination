import { create } from "zustand";

export interface Habit {
  id: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const useHabbitStore = create<HabitState>(() => {
  return {
    habits: [],
  };
});

export default useHabbitStore;
