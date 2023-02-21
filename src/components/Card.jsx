import { poke } from "../utils/data";
import { useState } from "react";

const Card = () => {
  const [array, setArray] = useState([poke]);
  console.log(array);
  return (
    <div>
      <h2>Card</h2>
      {array.map((pokemon) => {
        const { results } = pokemon;
        return (
          <div>
            {results.map((item) => {
              return (
                <div>
                  <h2>{item.name}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
