import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/types/car';
import styles from './CarCard.module.css';

type Props = {
  car: Car;
};


export default function CarCard({ car }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
  src={car.img}
  alt={`${car.brand} ${car.model}`}
  width={300}
  height={200}
  style={{ objectFit: "cover", borderRadius: "12px" }}
/>


      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          {car.brand} {car.model}, {car.year}
        </h3>

        <p className={styles.price}>${car.rentalPrice}</p>

        <Link href={`/catalog/${car.id}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
}
