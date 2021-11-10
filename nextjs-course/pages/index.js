import Head from "next/head";
import {v4 as uuidv4} from "uuid";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props);
  return (
    <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Accueil</title>
    </Head>
    <div>
      <h1 className={styles.title}>Vocabulaire de base</h1>
      <table className={styles.tableau}>
        <tbody>
          {props.array.map((el) => (
            <tr key={uuidv4()}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}


/* 'getStaticProps' permet d'importer des data
 depuis une API/Db pour hydrater les fichiers statiques */

export async function getStaticProps() {
    const data = await import("/data/vocabulary.json");
    const array = data.vocabulary; // 'vocabulary' représente les data //


/********************************** 2 autres propriétés utiles *********************************/
    
    // if (array.length === 0) {
    //   return {
    //     notFound: true
    //   }
    // }

    // if (array.length === 0) {
    //   return {
    //     redirect: {
    //       destination: "/isr"
    //     }
    //   }
    // }
   
    /* et je retourne un objet (avec les data) pour pouvoir les 
      utiliser ici ds la page 'Home' */
       return {
         props: {
           array
         }
       }
}

/*****************************************************************************************************************************************/
