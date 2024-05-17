import "./Error.css";
import found from './assets/found.gif';
const Error = () => {
  return (
    <div className="error">
      <p>Usuário não encontrado!</p>
      <img src={found} alt="astronauta flutuando"/>
    
    </div>
  );
};

export default Error;
