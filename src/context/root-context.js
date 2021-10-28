import  { createContext } from "react";

//createContaxt is basically takes an argument which is an object.

//at initial its not needed to pass an argument but passing argument helps us in autocomplete.

export default createContext({
    userDetails: {
        name: "fayez",
        age: 26,
        gender: "male"
    },
    updateUserDetails: (details) => {}
})