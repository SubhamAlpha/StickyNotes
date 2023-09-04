import React from "react";


function Notes (promps){
    return <div className="note">
        <h1>{promps.title}</h1>
        <p>{promps.content}</p>
    </div>
}

export default Notes;