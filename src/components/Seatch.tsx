import { BsSearch } from "react-icons/bs";
//import React from "react";

const Search = () => {
    return (
        <div>
      <h2>Busque pelo seu usuário:</h2>
      <p>Veja seus repositórios</p>
      <div>
        <input type="text" placeholder="Digite seu nick"/>
        <button>
            <BsSearch/>
        </button>
      </div>


        </div>
    )
}

export default Search;