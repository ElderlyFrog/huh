import React from "react";
import {Jidlolist} from "./vege";
import {useState} from "react";


export const VegeStranka = () => {
    const [showComponent, setShowComponent] = useState (false);


    function handleClick() {
        setShowComponent(!showComponent);
    }


    return (
        <>

            <h1 className="text-7xl ">
                Chalce
            </h1>


             <Jidlolist/>

</>
    )
}