"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";


export default function Home() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js App</h1>
      <p>Explore different pages using the links below.</p>

      {/* Navigation Links */}
      <nav className={styles.navbar}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog/1">Blog Post 1</Link>
      </nav>

      {/* Button Navigation using useRouter */}
      <div className={styles.buttonGroup}>
        <button onClick={() => navigateTo("/about")}>Go to About</button>
        <button onClick={() => navigateTo("/contact")}>Go to Contact</button>
        <button onClick={() => navigateTo("/services")}>Go to Services</button>
      </div>
    </div>
  );
}
