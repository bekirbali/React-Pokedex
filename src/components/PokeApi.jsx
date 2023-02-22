import { useEffect, useState } from "react";
import Axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const PokeApi = () => {
  const [pokeData, setPokeData] = useState(null);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  // Axios.get(URL).then((data) => setPokeData(data));
  // const { data } = info;
  // const { next, previous, results } = data;

  useEffect(() => {
    Axios.get(URL).then((data) => setPokeData(data.data));
  });

  const clickHandler = () => {
    setText(
      pokeData.results.map((item, i) => {
        return <li key={i}>{item.name}</li>;
      })
    );
    setShow(show ? false : true);
  };

  return (
    <div>
      <ul>{show && text}</ul>
      <button onClick={clickHandler}>test</button>
    </div>
  );
};

export default PokeApi;
