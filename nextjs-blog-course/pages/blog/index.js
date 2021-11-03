import React from "react";
import  Link  from "next/link";

export default function index() {
  return (
    <div>
      <h1>Le Blog</h1>
      <Link href={`/blog/10 plats basque`}>
        <a>10 plats basque</a>
      </Link>
    </div>
  );
}
