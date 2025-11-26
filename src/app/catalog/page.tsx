'use client';

import { useEffect } from 'react';
import { useCarsStore } from '@/store/useCarsStore';
import CarsGrid from '@/components/catalog/CarsGrid';
import Filters from '@/components/catalog/Filters';
import LoadMoreButton from '@/components/catalog/LoadMoreButton';

export default function CatalogPage() {
  const {
    cars,
    filters,
    fetchCars,
    resetCars,     // ← ТЕПЕР ПРАВИЛЬНО ВИТЯГНУТО
    isLoading,
    error
  } = useCarsStore();

  useEffect(() => {
    resetCars();   // ← СКИДУЄМО ПЕРЕД ЗАВАНТАЖЕННЯМ
    fetchCars();   // ← ДАЛІ ЗАВАНТАЖУЄМО НОВІ
  }, [fetchCars, resetCars]);

  return (
    <section style={{ padding: '48px 0' }}>
      <h1 style={{ marginBottom: '32px' }}>Catalog</h1>

      {/* LABELS */}
      <div
        style={{
          display: 'flex',
          gap: '48px',
          marginBottom: '12px',
          paddingLeft: '4px',
          fontWeight: 600,
          fontSize: '14px',
          color: '#8A8A89',
        }}
      >
        <span>Car brand</span>
        <span>Price / 1 hour</span>
        <span>Car mileage / km</span>
      </div>

      {/* FILTERS */}
      <div style={{ marginBottom: '16px' }}>
        <Filters />
      </div>

      {/* FILTER SUMMARY */}
      {(filters.brand ||
        filters.price ||
        filters.minMileage ||
        filters.maxMileage) && (
        <div
          style={{
            marginBottom: '24px',
            fontSize: '14px',
            color: '#101828',
            fontWeight: 500,
          }}
        >
          {filters.brand && <span style={{ marginRight: '16px' }}>{filters.brand}</span>}
          {filters.price && (
            <span style={{ marginRight: '16px' }}>To ${filters.price}</span>
          )}
          {filters.minMileage && (
            <span style={{ marginRight: '16px' }}>
              From {Number(filters.minMileage).toLocaleString()}
            </span>
          )}
          {filters.maxMileage && (
            <span style={{ marginRight: '16px' }}>
              To {Number(filters.maxMileage).toLocaleString()}
            </span>
          )}
        </div>
      )}

      {/* LOADING / ERROR */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* GRID */}
      <CarsGrid cars={cars} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LoadMoreButton />
      </div>
    </section>
  );
}
