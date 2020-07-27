import React from "react";
import { API } from "../backend";

const Home = () => {
    console.log(API)
    return (
        <div>
            <h1>Welcome Home {API}</h1>
        </div>
    )
}

export default Home;