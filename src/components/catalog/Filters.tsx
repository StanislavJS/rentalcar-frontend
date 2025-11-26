'use client';

import { useEffect } from 'react';
import { useCarsStore } from '@/store/useCarsStore';

export default function Filters() {
  const {
    filters,
    brands,
    setFilters,
    resetCars,
    fetchCars,
    fetchBrands,
  } = useCarsStore();

  // Загружаем бренды из API при первом рендере
  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const handleSearch = async () => {
    resetCars();
    await fetchCars();
  };

  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      
      {/* Brand */}
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ brand: e.target.value })}
      >
        <option value="">Choose a brand</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      {/* Price */}
      <select
        value={filters.price}
        onChange={(e) => setFilters({ price: e.target.value })}
      >
        <option value="">Choose a price</option>
        {["30", "40", "50", "60", "70", "80"].map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      {/* Mileage From */}
      <input
        type="number"
        placeholder="From"
        value={filters.minMileage}
        onChange={(e) => setFilters({ minMileage: e.target.value })}
      />

      {/* Mileage To */}
      <input
        type="number"
        placeholder="To"
        value={filters.maxMileage}
        onChange={(e) => setFilters({ maxMileage: e.target.value })}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
