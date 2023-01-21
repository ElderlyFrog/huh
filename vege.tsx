import React from "react";
import {Chal} from "./vegekarta";
import {datakuch} from "./data";

const data= datakuch



export function Jidlolist()  {

    return(
<div>
    {data.map((chal: {name: any; timeEstimationInMinutes: number; ingredients: string[]; difficulty: string; isVegan: boolean; id: string; imageUrl: string; description: string;})=> <Chal{...chal}/>)}
</div>







    )
}
