import React, { useState } from "react";
import ActorList from "./components/ActorList";
import './components/styling.css';
import ActorDetail from "./components/ActorDetail";

function App() {
    const [selectedActor, setSelectedActor] = useState(null);

    function handleActorClick(actor) {
        setSelectedActor(actor);
    }

    return ( <
        div className = "App" > {
            selectedActor ? ( <
                div className = "actors-detail" >
                <
                ActorDetail actor = { selectedActor }
                /> <
                /div>
            ) : ( < div className = "background-image" > <
                ActorList onActorClick = { handleActorClick }
                /></div >
            )
        } <
        /div>
    );
}

export default App;