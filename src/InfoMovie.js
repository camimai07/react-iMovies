

export function InfoMovie({movie, active =''}){
    const movies= (info) =>{
        switch (movie) {
            case "the-little-mermaid":
                return (
                    <>
                    <h2>2023 - Fantasía/Musical - 2h | 15min</h2>
                    <p>Una joven sirena que anhela conocer el mundo que se extiende donde acaba el mar emerge a la superficie y se enamora del príncipe Eric. Sin embargo, la única manera de estar con él exige hacer un pacto con Úrsula, la perversa bruja del mar.
                    </p>
                    </>
                    );
                break;
            case "the-black-demon":
                return (
                    <>
                    <h2>2023 - Terror/Suspenso - 1h | 40min</h2>
                    <p>Las idílicas vacaciones de una familia se convierten en una pesadilla cuando el grupo queda varado en una plataforma petrolífera, a merced de un tiburón gigante, un megalodón hambriento.
                    </p>
                    </>
                    
                    );
                break;
            case "Avengers-Endgame":
                return (
                    <>
                    <h2>2019 - Acción/Ciencia ficción - 3h | 2min</h2>
                    <p>Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.
                    </p>
                    </>
                    
                    );
                break;
            case "the-tank":
                return (
                    <>
                    <h2>2023 -  Terror/Suspenso - 1h | 40min</h2>
                    <p>Después de heredar misteriosamente una propiedad costera abandonada, Ben y su familia liberan accidentalmente una antigua criatura latente que aterrorizó toda la región, incluidos sus propios antepasados, durante generaciones.
                    </p>
                    </>
                    
                    );
                break;
            case "the-65":
                return (
                    <>
                    <h2>2023 - Ciencia ficción/Acción - 1h | 33min</h2>
                    <p>Tras sufrir un accidente y caer a un planeta desconocido, los supervivientes de la nave descubren que han llegado a la Tierra, pero hace 65 millones de años. Ahora, deben cruzar un territorio inhóspito, poblado de bestias prehistóricas, para salir.
                    </p>
                    </>
                    
                    );
                break;
            
        }


    }
    return(
            <div className= {`texto-peli ${movie} ${active}`}>
                <img
                src={`imagenes/${movie}-title.png`} className="movie-title" alt=""
                />
                
                {movies()}
                
                
                <div className="trailer">
                    <h3><i className="fa-solid fa-circle-play"></i> Ver trailer</h3>
                </div>
            </div>
            
            

    );
}