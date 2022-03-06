import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const SlotContext = createContext();

export function SlotContextProvider({ children }) {
    // for more complex state you might set up useReducer for Redux-like state updates
    const [slots, setSlots] = useState([]);
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    // useEffect is a lifecycle method for function components, run once after mount
    useEffect(() => {
        // the callback to useEffect can't be async, but you can declare async within
        async function fetchData() {
            // use the await keyword to grab the resolved promise value
            // remember: await can only be used within async functions!
            const { data } = await axios.get(
                `https://api.eat-sandbox.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453`
            );
            // update local state with the retrieved data 
            setName(data.data.attributes.name);
            setAddress(data.data.attributes.address_line_1);
            setDate(data.data.attributes.openings);
        }
        // fetchData will only run once after mount as the deps array is empty 
        fetchData();
    }, []);
    return (
        <SlotContext.Provider
            // Add required values to the value prop within an object (my preference)
            value={{
                name, address, date
            }}
        >
            {children}
        </SlotContext.Provider>
    );
}

// Create a hook to use the SlotContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(SlotContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}