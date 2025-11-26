import Image from "next/image";
import BookingForm from "./BookingForm";
import styles from "./CarDetails.module.css";
import { Car } from "@/types/car";

type Props = {
  car: Car;
};

export default function CarDetails({ car }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* Left: Image + Form */}
      <div className={styles.left}>
        <div className={styles.imageWrapper}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            className={styles.image}
          />
        </div>

        <BookingForm />
      </div>

      {/* Right: Details */}
      <div className={styles.right}>
        <h1 className={styles.title}>
          {car.brand} {car.model}, {car.year}
        </h1>

        <p className={styles.price}>${car.rentalPrice}</p>

        <p className={styles.description}>{car.description}</p>

        <div className={styles.block}>
          <h3>Rental Conditions:</h3>
          <ul>
            {car.rentalConditions.map((cond) => (
              <li key={cond}>{cond}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3>Car Specifications:</h3>
          <ul>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h3>Accessories and functionalities:</h3>
          <ul>
            {car.accessories.map((a) => (
              <li key={a}>{a}</li>
            ))}
            {car.functionalities.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
