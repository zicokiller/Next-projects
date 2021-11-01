import React from "react";
import { useRouter } from "next/router";

export default function article() {
  const router = useRouter();

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);
  
  
  
  
  return (
    <div>
      <h1>Je suis l'article</h1>
    </div>
  );
}
