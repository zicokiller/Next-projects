import { useState, useEffect } from "react";

export default function random() {
  const [state, setState] = useState(false);

  // 'useEffect' pour appeler 'newWord' qd on arrive sur la page
  useEffect(() => {
    newWord();
  }, []);

  const newWord = async () => {
    const res = await fetch("/api/vocapi");
    const data = await res.json();
    setState(data);
  };

  //console.log(state);


// A chaque clic sur le btn -> le state change, et je randomise les mots func 'newWord()' + 'randomWord'
  let randomWord;
  if (state) {
    // j'isole ici le tableau à l'index 0 (words) ds 'englishList'
      const array = state.englishList[0].data;
    // avec ce code, je randomise un mot depuis ce tableau
      randomWord = array[Math.floor(Math.random() * array.length)].en;
      console.log(randomWord);
  }

  return (
    <div>
      <h1 className="text-center">Mot au hasard</h1>
      <button className="btn btn-primary d-block m-auto mt-5" onClick={newWord}>
        Get Random Words
      </button>
      <h2 className="text-center mt-2">{randomWord}</h2>
    </div>
  );
}
