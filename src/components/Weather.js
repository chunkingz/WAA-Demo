import { useNavigate } from "react-router-dom";

const Weather = ({weathers}) => {

    const navigate = useNavigate();
    
    const viewDetails = id => {
        navigate("/weathers/"+id);
    }

    return ( 
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {weathers.map((w, i) => (
                        <tr key={w.id}>
                            <td>{i+1}</td>
                            <td>{w.name}</td>
                            <td><button onClick={() => viewDetails(w.id)}>View Details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
 
export default Weather;