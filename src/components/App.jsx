import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes"
import notes from "../notes"

function App(){
    return <div>
        <Header />
        <Footer/>
        {notes.map(noteItem =>(
            <Notes
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.Content}``
            />
        ))}
    </div>
}

export default App;