import React from "react";

const NavBar = () => {
    return(
        <nav>
            <div className="NavBar">
                <a href="/Accueil" title="Page d'Accueil">
                    <div className="NavBarLink">
                        Accueil
                    </div>
                </a>
                <a href="/Experience" title="L'Expérience">
                    <div className="NavBarLink">
                        Expérience
                    </div>
                </a>
                <a href="/Causes" title="Les Causes du Phénomène">
                    <div className="NavBarLink">
                        Causes
                    </div>
                </a>
                <a href="/Consequences" title="Les Conséquences du Phénomène">
                    <div className="NavBarLink">
                        Conséquences
                    </div>
                </a>
                <a href="/Retroactions" title="Le Cercle Vicieux Engendré">
                    <div className="NavBarLink">
                        Le Cercle Vicieux
                    </div>
                </a>
                <a href="https://www.edumedia-sciences.com/fr/media/152-quiz-cycle-de-leau" title="Quiz !">
                    <div className="NavBarLink">
                        Quiz
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;