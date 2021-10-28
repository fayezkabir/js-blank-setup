import React, { useContext } from "react";
import RootContext from "../../context/root-context";

const Home = () => {
    const { userDetails, updateUserDetails } = useContext(RootContext);
    return (
        <div>
            <p>{`hey ${userDetails?.name} this is home page`}</p>
            <button onClick={() => updateUserDetails("kabir")}>click me</button>
        </div>
    )
}

export default Home;