import React from "react";
import Character from "./Character";
import Data from "./Data";

function App(){

// eslint-disable-next-line array-callback-return
const All =Data.map((one, i)=>{ 
    return(
    <Character key={i} name={one.name} role={one.role} 
    country={one.country} year={one.year} img={one.img} />
)})


    return(
        <div>
            {All}
        </div>
    )
}

export default App;



