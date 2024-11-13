import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';



const LocationContext = createContext();

export const useLocation = () => {
    return useContext(LocationContext);
};

// eslint-disable-next-line react/prop-types
export const LocationProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])


    const getCountries = async () => {
        axios.get('https://countriesnow.space/api/v0.1/countries/').then((res) => {
            setCountries(res.data.data);
        })
    }

    return (
        <LocationContext.Provider value={{ countries }}>
            {children}
        </LocationContext.Provider>
    );
};
