import React from "react";
import './styling.css';

function ActorDetail({ actor, onBackClick }) {
    return ( <
        div className = "actor-detail" >
        <
        h2 > { actor.name } < /h2> <
        p > Height: { actor.height } < /p> <
        p > Birth Year: { actor.birth_year } < /p> <
        h3 > Films: < /h3> <
        ul > {
            actor.films.map((film, index) => ( <
                li key = { index } > { film } < /li>
            ))
        } <
        /ul> <
        button onClick = { onBackClick } > Back < /button> < /
        div >
    );
}

export default ActorDetail;