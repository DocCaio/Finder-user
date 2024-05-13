import Search from "../components/Seatch";
import { useState } from 'react';

const Home = () => {

    const [user,setUser] = useState(null);
    return (
        <div>
            <Search/>
        </div>
    )
}

export default Home;