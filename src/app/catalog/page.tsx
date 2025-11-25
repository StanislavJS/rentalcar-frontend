'use client';

import { useEffect } from 'react';
import { useCarsStore } from '@/store/useCarsStore';

export default function CatalogPage() {
  const { cars, fetchCars, isLoading, error } = useCarsStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <section className="container" style={{ padding: '48px 0' }}>
      <h1>Catalog</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} — {car.model} — {car.rentalPrice}$
          </li>
        ))}
      </ul>
    </section>
  );
}
