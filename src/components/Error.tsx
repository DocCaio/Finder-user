import "./Error.css";
//import { PiSmileySadLight } from "react-icons/pi";
import found from './assets/found.gif';
const Error = () => {
  return (
    <div className="error">      
      <p>Usuário não encontrado!
      {/*<PiSmileySadLight />*/}
      </p>      
      <img src={found} alt="astronauta flutuando"/>
    
    </div>
  );
};

export default Error;
