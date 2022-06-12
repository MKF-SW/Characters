import React from "react";


function Character(prop){
    return(      
<div style={{display:"inline-block",}}>

<div>
<section  style={{display:"block", height:"300px", width:"160px", backgroundColor:"plum", margin:"20px", padding:"2%", textAlign:"center", borderRadius:"20px",}}>

        <article>
            <img style={{height:"160px"}}
    src={prop.img}
    height="150" alt={prop.name}/>
        </article>
        <article style={{margin:"1px", color:"red"}}><i >{prop.role}</i></article>
        <article style={{margin:"1px", color:"yellow"}}> {prop.name}</article>
        <article style={{margin:"1px", color:"green"}}>{prop.country}</article>
        <article style={{margin:"1px", color:"white"}}>Since: {prop.year}</article>
        
    </section>
</div>


</div>
    )
};
export default Character;