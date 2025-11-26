import { getCarById } from '@/services/carsApi';
import CarDetails from '@/components/car/CarDetails';

export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = await getCarById(id);

  return (
    <section className="container" style={{ padding: '48px 0' }}>
      <CarDetails car={car} />
    </section>
  );
}
