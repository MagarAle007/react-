import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("error fetching data", error);
            });
    }, []);

    const handleChange = () => {
        console.log(data);
    };

    return (
        <div>
            <h1>
                <button onClick={handleChange}>fetch</button>
            </h1>
        </div>
    );
}

export default Api;