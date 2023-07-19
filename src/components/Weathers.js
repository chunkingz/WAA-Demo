import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

const Weathers = () => {

    const [weatherState, setWeatherState] = useState(null);

    const getWeather = async() => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            setWeatherState(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWeather();
    },[])

    return ( 
        <>
        {weatherState && <Weather weathers={weatherState}/>}
        </>
     );
}
 
export default Weathers;