'use client';

import { useCarsStore } from '@/store/useCarsStore';

export default function LoadMoreButton() {
  const { page, totalPages, loadMore, isLoading } = useCarsStore();

  if (page >= totalPages) return null;

  return (
    <button
      onClick={loadMore}
      style={{
        marginTop: '32px',
        padding: '12px 24px',
        borderRadius: '12px',
        background: '#3470FF',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        fontSize: '16px',
        fontWeight: 600,
      }}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load more'}
    </button>
  );
}
