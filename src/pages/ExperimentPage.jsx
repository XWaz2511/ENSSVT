import ExperimentImage1 from "../resources/images/experiment1.webp";
import ExperimentImage2 from "../resources/images/expertiment2.webp";
import ExperimentVideo from "../resources/videos/experiment.mp4";
import OrganizedListScreen from "../components/screens/OrganizedListScreen";
import PPIIScreen from "../components/screens/PPIIScreen";
import React from "react";
import TitleScreen from "../components/screens/TitleScreen";
import VideoPlayerScreen from "../components/screens/VideoPlayerScreen";

const ExperimentPage = () => {
    return (
        <div className="Page" id="ExperimentPage">
            <TitleScreen
                screenTitle="L'Expérience"
                eltToScroll="VideoPlayerScreen"
            />
            <VideoPlayerScreen video={ExperimentVideo} screenTitle="Vidéo" />
            <PPIIScreen
                screenTitle="Présentation de l'Expérience"
                texts={[
                    "",
                    "",
                ]}
                images={[ExperimentImage1, ExperimentImage2]}
            />
            <OrganizedListScreen
                screenTitle="Protocole de l'Expérience"
                lis={[
                    [
                        "Etape 1 :",
                        " Remplir un erlenmeyer de volume au choix (de préférence supérieur à 500mL) avec de l'eau salée.",
                    ],
                    [
                        "Etape 2 :",
                        " Ajouter quelques gouttes de colorant (de préférence bleu de méthylène) dans l'erlenmeyer.",
                    ],
                    [
                        "Etape 3 :",
                        " Reboucher l'erlenmeyer avec un bouchon à travers lequel on aura au préalable fait passer un thermomètre ainsi qu'un tube gradué. Attention :l'erlenmeyer doit être assez rempli pour que de l'eau monte au quart environ du tube.",
                    ],
                    [
                        "Etape 3 :",
                        " Déposer l'erlenmeyer sur une plaque chauffante équipée d'un agitateur magnétique.",
                    ],
                    [
                        "Etape 4 :",
                        " Activer l'agitateur magnétique à la vitesse apropriée.",
                    ],
                    [
                        "Etape 5 :",
                        " Activer la plaque chauffante à la puissance désirée.",
                    ],
                    [
                        "Etape 6 :",
                        " Constater que l'eau monte au fur et à mesure qu'elle chauffe.",
                    ],
                ]}
            />
        </div>
    );
};

export default ExperimentPage;
