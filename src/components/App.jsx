import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App(){
    return <div>
        <Header />
        <Footer />
        {notes.map(inside=>
        <Note 
            key={inside.key}
            title={inside.title}
            content={inside.content}
        />
    )}
    </div>
}

export default App;