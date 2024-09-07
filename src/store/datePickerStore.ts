import { create } from 'zustand';

interface DatePickerStore {
  startDate: Date | null;
  endDate: Date | null;
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  recurrenceInterval: number;
  selectedDays: number[];
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setRecurrenceType: (type: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  setRecurrenceInterval: (interval: number) => void;
  setSelectedDays: (days: number[]) => void;
}

export const useDatePickerStore = create<DatePickerStore>((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'daily',
  recurrenceInterval: 1,
  selectedDays: [],
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSelectedDays: (days) => set({ selectedDays: days }),
}));