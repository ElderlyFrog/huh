import React from 'react';
import type { ReactNode } from "react"

interface KartaPropsTypes {
    children: ReactNode
}
export function Karta({children }: KartaPropsTypes   ) {
    return (

         <div >

             {children}








        </div>
    );
}
