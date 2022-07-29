import axios from "axios";
import  { useEffect } from "react";

const GetButton = () => {
    useEffect(async () => {
     const result = await axios('http://localhost:8081/api/v1/users');
     console.log(result.data);
    }, [])
    

    return (
        <div>
            <h1>Get http://localhost:8080/api/v1/users</h1>
        </div>
    )
};


export default GetButton;