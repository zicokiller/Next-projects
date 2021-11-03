import React from "react";
import Image from "next/image";
import image1 from "../public/assets/image1.jpg";
import image2 from "../public/assets/image2.jpg";
import image3 from "../public/assets/image3.jpg";

export default function gallery() {
  return (
    <div>
      <Image layout="responsive"  placeholder="blur" src={image1} width="4392" height="6587" />

      <Image layout="responsive" placeholder="blur" src={image2} width="3680" height="5674" />

      <Image layout="responsive" placeholder="blur" src={image3} width="4912" height="3264" />

      {/* <img src="/assets/image1.jpg" alt="" />
            <img src="/assets/image2.jpg" alt="" />
            <img src="/assets/image3.jpg" alt="" /> */}
    </div>
  );
}

/* compression photo Next
3.8MB -> 1.2MB
2.1MB -> 869KB
2.0MB -> 397KB
*/
