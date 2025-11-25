import { create } from 'zustand';
import { Car } from '@/types/car';
import { getCars } from '@/services/carsApi';

type CarsState = {
  cars: Car[];
  totalCars: number;
  isLoading: boolean;
  error: string | null;
  fetchCars: () => Promise<void>;
};

export const useCarsStore = create<CarsState>((set) => ({
  cars: [],
  totalCars: 0,
  isLoading: false,
  error: null,

  fetchCars: async () => {
    try {
      set({ isLoading: true, error: null });

      const data = await getCars({ limit: '12', page: '1' });

      set({
        cars: data.cars,
        totalCars: data.totalCars,
      });
    } catch (err) {
      set({ error: 'Failed to load cars' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
