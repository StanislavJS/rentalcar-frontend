import { api } from './apiClient';
import { Car } from '@/types/car';

export type GetCarsParams = {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
};

export const getCars = async (params: GetCarsParams) => {
  const response = await api.get('/cars', { params });
  return response.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};

export const getBrands = async () => {
  const response = await api.get('/brands');
  return response.data;
};
