import React from "react";

export default function contact(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.data.quotes[0].text}</h1>
    </div>
  );
}
/****************** ISG (Incremental Static Generation) ******************/
/* Cette func sera éxécutée côté serveur et les data refresh ('revalidate')
   à chaque appel de la page par un user */
export async function getStaticProps() {
  const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
  const data = await quote.json();

  return {
    props: {
      data
    }, 
    revalidate: 20 // La proriété 'revalidate' refresh les data côté serveur (ici tte les 20s)
  }
}

// https://goquotes-api.herokuapp.com/api/v1/random?count=
