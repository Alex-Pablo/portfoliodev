

import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Resumen from "@/app/resumen/resumen"

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.responsiveContainer}`}>
      <Sidebar/>
      <div className={styles.content}>
        <Navbar></Navbar>
        <Resumen></Resumen>
      </div>
    </main>
  );
}
