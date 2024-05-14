type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  
};

import classes from './Search.modules.css';

import { useState } from "react";
import { BsSearch } from "react-icons/bs";


const Search = ({loadUser}: SearchProps) => {

  const [userName , setUserName] = useState("");
    return (
        <div className={classes.search}>
          
      <h2>Busque pelo seu usuário:</h2>
      <p>Veja seus repositórios</p>
      <div>
        <input 
        type="text" 
        placeholder="Digite seu nick"
        onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
            <BsSearch/>
        </button>
      </div>


        </div>
    )
}

export default Search;