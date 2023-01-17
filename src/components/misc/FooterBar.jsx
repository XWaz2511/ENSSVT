import React from "react";

const FooterBar = () => {
    return(
        <footer>
            <div className="FooterBar">
                <div className="FooterBarCase">
                    <a href="/Accueil">
                        Accueil
                    </a>
                </div>
                <div className="FooterBarCase">
                    <a href="/Causes">
                        Les Causes
                    </a>
                </div>
                <div className="FooterBarCase">
                    <a href="/Consequences">
                        Les Conséquences
                    </a>
                </div>
                <div className="FooterBarCase">
                    <a href="/Experience">
                        L'Expérience
                    </a>
                </div>
                <div className="FooterBarCase">
                    <a href="/Retroactions">
                        Le Cercle Vicieux
                    </a>
                </div>
                <div className="FooterBarCase">
                    <a href="https://www.edumedia-sciences.com/fr/media/152-quiz-cycle-de-leau">
                        Le Quiz
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;