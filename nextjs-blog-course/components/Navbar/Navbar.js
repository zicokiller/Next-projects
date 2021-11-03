import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}
