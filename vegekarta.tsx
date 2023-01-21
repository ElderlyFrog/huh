import React, {useState} from "react";
import {datakuch} from "./data";
import {Karta} from "./karta";








const data = datakuch;

interface dataProps{

    name: any; timeEstimationInMinutes: number; ingredients: string[]; difficulty: string; isVegan: boolean; id: string; imageUrl: string; description: string;
}


  export const Chal =(props: dataProps) => {
    return  (
        <Karta >
                 <div className="border-4 border-green-700 rounded-lg m-5   bg-white ">
                        <div className="grid grid-cols-4 ">
                <div className=" "> <img className="m-6" src={props.imageUrl} alt=""/></div>
                         <div className=""> < h1 className="  m-6 text-4xl " >{props.name}</h1>
                         <p className="text-3xl m-6 ">
                             <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block icon icon-tabler icon-tabler-clock"
                                 width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                 <circle cx="12" cy="12" r="9"/>
                                 <polyline points="12 7 12 12 15 15"/>
                             </svg>{props.timeEstimationInMinutes}
                             <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block icon icon-tabler icon-tabler-mushroom"
                                  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                 <path
                                     d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a0.9 .9 0 0 0 .9 .9h14.2a0.9 .9 0 0 0 .9 -.9z"/>
                                 <path d="M10 12v7a2 2 0 1 0 4 0v-7"/>
                             </svg>{props.difficulty}   </p></div>
                         <div> </div>
                         <div className="place-self-center">  <button className=" p-5 px-10 border-2  rounded-lg border-fuchsia-900 bg-fuchsia-900">ingred</button></div>
                     </div>
                     <div  className="grid grid-cols-3 " >
                         <div className="col-span-2 p-3 m-1"> {props.description}             </div>
                         <div className="p-3 m-1"> {props.ingredients} </div>
                         <div> </div>
                     </div>




        </div>

        </Karta>
    )
}



