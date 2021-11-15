// import React from "react";

export default function cours(props) {
    console.log(props);
  return (
    <div>
      <h1 className="text-center my-2">LE BTC est à: {props.results.bpi.EUR.rate}</h1>
    </div>
  );
}

// Avec 'getServerSideProps' tte la page est faite côté serveur
export async function getServerSideProps() {
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const results = await data.json();

    return {
        props: {
            results
        }
    }
}

// url API :
// https://api.coinbase.com/v2/prices/currency=USD
// https://api.coindesk.com/v1/bpi/currentprice.json
