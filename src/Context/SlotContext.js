import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const SlotContext = createContext();

export function SlotContextProvider({ children }) {
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);
    const [date, setDate] = useState([]);
    const [showUser, setShowUser] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `https://api.eat-sandbox.co/public/v2/restaurants/14bf9273-64f3-4b39-875b-a616fc83f453`
            );
            setName(data.data.attributes.name);
            setAddress(data.data.attributes.address_line_1);
            setDate(data.data.attributes.openings);
        }
        fetchData();
    }, []);
    return (
        <SlotContext.Provider
            value={{
                name, address, date, showUser, setShowUser
            }}
        >
            {children}
        </SlotContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(SlotContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}