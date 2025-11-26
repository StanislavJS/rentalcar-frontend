import { create } from "zustand";
import { Car } from "@/types/car";
import { getCars, getBrands } from "@/services/carsApi";

type CarsState = {
  cars: Car[];
  totalCars: number;
  totalPages: number;
  page: number;

  brands: string[];

  isLoading: boolean;
  error: string | null;

  filters: {
    brand: string;
    price: string;
    minMileage: string;
    maxMileage: string;
  };

  setFilters: (f: Partial<CarsState["filters"]>) => void;
  resetCars: () => void;

  fetchCars: () => Promise<void>;
  fetchBrands: () => Promise<void>;
  loadMore: () => Promise<void>;
};

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  totalCars: 0,
  totalPages: 1,
  page: 1,

  brands: [],

  isLoading: false,
  error: null,

  filters: {
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  },

  setFilters: (f) =>
    set((state) => ({
      filters: { ...state.filters, ...f },
    })),

  resetCars: () =>
    set({
      cars: [],
      page: 1,
    }),

  // ========= FETCH CARS ==========
  fetchCars: async () => {
    const { filters, resetCars } = get();

    try {
      set({ isLoading: true, error: null });

      resetCars(); // сброс перед новым запросом

      const data = await getCars({
        limit: "12",
        page: "1",
        brand: filters.brand,
        rentalPrice: filters.price,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
      });

      set({
        cars: data.cars,
        totalCars: data.totalCars,
        totalPages: data.totalPages,
        page: 1,
      });
    } catch {
      set({ error: "Failed to load cars" });
    } finally {
      set({ isLoading: false });
    }
  },

  // ========= LOAD MORE ==========
  loadMore: async () => {
    const { page, totalPages, filters } = get();

    if (page >= totalPages) return;

    const nextPage = page + 1;

    try {
      set({ isLoading: true });

      const data = await getCars({
        limit: "12",
        page: String(nextPage),
        brand: filters.brand,
        rentalPrice: filters.price,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
      });

      set((state) => ({
        cars: [...state.cars, ...data.cars],
        page: nextPage,
      }));
    } catch {
      set({ error: "Failed to load more cars" });
    } finally {
      set({ isLoading: false });
    }
  },

  // ========= FETCH BRANDS ==========
  fetchBrands: async () => {
    try {
      const data = await getBrands();
      set({ brands: data });
    } catch (e) {
      console.error("Failed to load brands", e);
    }
  },
}));
