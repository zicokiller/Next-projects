import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Accueil</a>
      </Link>

      <Link href="/blog/article">
        <a>&nbsp;&nbsp;Article</a>
      </Link>

      <Link href="/contact">
        <a>&nbsp;&nbsp;Contact</a>
      </Link>
    </nav>
  );
}
