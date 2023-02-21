import { useState, useEffect } from "react";
import Axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const PokeApi = async () => {
  const info = await Axios.get(URL).then((data) => data);
  const { data } = info;
  const { next, previous, results } = data;

  return next, previous, results;
};

export default PokeApi;
