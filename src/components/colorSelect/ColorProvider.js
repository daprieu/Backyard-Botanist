import React, { useState, createContext } from "react"

export const FlowerColorContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FlowerColorProvider = (props) => {
    
    const [colors, setColors] = useState([])
    
    

    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.
const getFlowerColors = () => {
    return fetch("https://backyard-botanist-api.herokuapp.com/flowerColors")
    .then(res => res.json())
        .then(setColors)
}
return (
    <FlowerColorContext.Provider value={{
        colors, getFlowerColors
    }}>
        {props.children}
    </FlowerColorContext.Provider>
)
//You return a context provider which has the `FlowerColors` state, `getFlowerColors` function,
// etc. function as keys. This allows any child elements to access them.

}