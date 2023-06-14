import React, { useState, useEffect, useCallback } from "react";
import ActorDetail from "./ActorDetail";
import './styling.css';

function ActorList() {
    const [actors, setActors] = useState([]);
    const [selectedActor, setSelectedActor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchActors = useCallback(async() => {
        try {
            setLoading(true);
            const response = await fetch("https://swapi.dev/api/people/");
            const data = await response.json();
            const actorPromises = data.results.map(async(actor) => {
                const actorResponse = await fetch(actor.url);
                const actorData = await actorResponse.json();
                return {
                    name: actorData.name,
                    height: actorData.height,
                    birth_year: actorData.birth_year,
                    films: actorData.films,
                };
            });
            const actorsWithFilms = await Promise.all(actorPromises);
            setActors(actorsWithFilms);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchActors();
    }, [fetchActors]);

    function handleActorClick(actor) {
        setSelectedActor(actor);
    }

    function handleBackClick() {
        setSelectedActor(null);
    }

    if (loading) {
        return <div className = "loading" > Loading... < /div>;
    }

    if (error) {
        return <div className = "error" > Error: { error } < /div>;
    }

    if (selectedActor) {
        return <ActorDetail actor = { selectedActor }
        onBackClick = { handleBackClick }
        />;
    }

    return ( <
        div > {
            actors.map((actor) => ( <
                div key = { actor.name }
                className = "actor-card" >
                <
                h2 > { actor.name } < /h2> <
                p > Height: { actor.height } < /p> <
                p > Birth Year: { actor.birth_year } < /p> <
                button onClick = {
                    () => handleActorClick(actor)
                } > Detail < /button> < /
                div >
            ))
        } <
        /div>
    );
}

export default ActorList;