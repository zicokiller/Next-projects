import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

export default function Liste(props) {
  console.log(props);
  const router = useRouter();
  return (
    <div class="container">
      <h1 className={styles.title}>
        {router.query.liste.charAt(0).toUpperCase() +
          router.query.liste.slice(1)}
      </h1>
      <table className={styles.tableau}>
        <tbody>
          {props.listeEnCours.map((el) => (
            <tr key={uuidv4()}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 'getStaticPaths' = pour indiquer à Next le nbre de chemins que je veux pour
    créer le nbre de pages voulues */

/* Dès qu'il y a des chemins dynamiques, 
  je use -> 'getStaticPaths' puis -> 'getStaticProps' 
  pour alimenter les pages avec les data */

/* 'context' fonctionne avec 'getStaticPaths' pour 
   retrouver la bonne page et lui set les bonnes data */

export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import("/data/lists.json");

  const listeEnCours = data.englishList.find((list) => list.name === slug);

  return {
    props: {
      listeEnCours: listeEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("/data/lists.json");

  // je stocke ici les sous-tableau d'objets ('words', 'adjectives', 'verbs')
  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));

  return {
    // paths: [
    //     {params: {liste: "words"}} /*'liste' fait ref à mon chemin dynamique, 'words' est
    //                                   le nom du slug (sous-tableau) de la page que l'on veut créer */
    // ],
    paths,
    fallback: false,
  };
}
