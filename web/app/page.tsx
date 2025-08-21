import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="bg-yellow-500">Yellow</h1>
    </div>
  );
}
