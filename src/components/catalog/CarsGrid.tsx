import { Car } from '@/types/car';
import CarCard from './CarCard';
import styles from './CarsGrid.module.css';

type Props = {
  cars: Car[];
};

export default function CarsGrid({ cars }: Props) {
  return (
    <div className={styles.grid}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
