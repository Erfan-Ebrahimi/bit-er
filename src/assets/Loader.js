import React from 'react';
import load from "./icons/load.gif";
const Loader = () => {
    return (
        <div>
            <img src={load} alt="load"/>
            <h1>LOADING . . .</h1>
        </div>
    );
};

export default Loader;