import React from "react";

const  show = () => {

    let x = [1,2,3,4,5]
    return(
    
       <div>
        {x.map((e)=>{
            return( <div> {e}</div>)
        })}
       </div>
    )
}

export default show