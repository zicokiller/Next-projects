import Link from "next/link";
import {v4 as uuidv4} from "uuid";
// import styles from "../styles/Lists.module.css";

export default function index(props) {
  console.log(props.array.forEach(item => console.log(Object.keys(item) [0]))); // display tous les sous-tableau
  return (
    <div className="container">
      <h1 className="my-4">Les Listes de Vocabulaire</h1>
        <ul className="list-group">
          {props.array.map(item => (
            <li className="list-group-item" key={uuidv4()}>
              <Link href={Object.keys(item) [0]}> 
                <a>{Object.keys(item) [0]}</a>
              </Link>
            </li>
          ))}
        </ul>

    </div>
    
  )
}

export async function getStaticProps() {

  const data = await import("/data/lists.json");
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
