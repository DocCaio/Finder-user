type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  
};

import classes from './Search.modules.css';

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";


const Search = ({loadUser}: SearchProps) => {

  const [userName , setUserName] = useState("");

  const handleKeyDown = (e :  KeyboardEvent) => {
    if(e.key === 'ENTER') {
      loadUser(userName);
    }
  };



    return (
        <div className={classes.search}>
          
      <h2>Busque pelo seu usuário:</h2>
      <p>Veja seus repositórios</p>
      <div className={classes.search_container}>
        <input 
        type="text" 
        placeholder="Digite seu nick"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
            <BsSearch/>
        </button>
      </div>


        </div>
    )
}

export default Search;