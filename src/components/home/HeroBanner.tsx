import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero-car.png"
        alt="Car"
        fill
        className={styles.image}
        priority
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link href="/catalog" className={styles.button}>
          View Catalog
        </Link>
      </div>
    </section>
  );
}
