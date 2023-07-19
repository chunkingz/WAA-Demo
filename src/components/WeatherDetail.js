import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeColorContext } from "./Dashboard";
import axios from "axios";

const WeatherDetail = ({setTheme}) => {

    const params = useParams();
    const themeColor = useContext(ThemeColorContext);

    const [themeState, setThemeState] = useState(themeColor);

    const [weatherDetail, setWeatherDetail] = useState(null);

    const handleThemeUpdate = (e) => {
        e.preventDefault();
        setTheme(themeState);
    }

    useEffect(() => {
        const getWeatherDetail = async() => {
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/users/"+params.id);
                setWeatherDetail(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getWeatherDetail();
    }, [params.id])

    return ( 
        <>
            {weatherDetail && 
            <>
                <div className="weatherDetail">
                    Name: {weatherDetail.name} <br />
                    Username: {weatherDetail.username} <br />
                    Email: {weatherDetail.email} <br />
                </div> <br />
                <div className="themeColorForm">
                    Current Theme Color: {themeState} <br />
                    <p>Type a color and click the btn to update</p>

                    <form onSubmit={handleThemeUpdate}>
                        <input type="text" value={themeState} 
                        onChange={e => setThemeState(e.target.value)}/>
                        <button type="submit">Update Theme Color</button>
                    </form>

                </div>
            </>
            }
        </>
     );
}
 
export default WeatherDetail;