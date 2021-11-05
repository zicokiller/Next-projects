import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props);
  return (
    <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>titre</title>
    </Head>
    <div>
      <h1 className={styles.title}>Vocabulaire de base</h1>
      <table className={styles.tableau}>
        <tbody>
          {props.array.map((el, index) => (
            <tr key={index}>
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


/* La méthode 'getStaticProps' permet d'importer des data
 depuis une API ou Db pour hydrater les fichiers statiques */

export async function getStaticProps() {
    const data = await import("/data/vocabulary.json");
    const array = data.vocabulary; // 'vocabulary' représente les data //

/********************* Autres propriétés utiles *********************/
    // if (array.length === 0) {
    //   return {
    //     notFound: true
    //   }
    // }

    if (array.length === 0) {
      return {
        redirect: {
          destination: "/isr"
        }
      }
    }
    
    /*et je retourne un objet (avec les data) pour pouvoir les 
      utiliser ici ds la page 'Home' */
       return {
         props: {
           array
         }
       }
}
