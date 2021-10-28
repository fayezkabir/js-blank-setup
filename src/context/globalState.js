import React, { useState } from "react";

import RootContext from "./root-context";

const GlobalState = props => {

    const [userDetails, setUserDetails] = useState({
        name: "fayez",
        age: 26,
        gender: "male"
    });

    const updateUserDetails = (details) => {
        const temporarayDetails = JSON.parse(JSON.stringify(userDetails));

        temporarayDetails.name = details;
        setUserDetails(temporarayDetails);
        console.log("hey this is working.Congrats", temporarayDetails.name);
    };

    return (
        <RootContext.Provider value={{
            userDetails ,
            updateUserDetails
        }}>
            {props.children}
        </RootContext.Provider>
    )
};

export default GlobalState;