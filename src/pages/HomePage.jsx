import React, { useEffect, useState } from "react";

import AutoSlidingBackgroundScreen from "../components/screens/AutoSlidingBackgroundScreen";
import LinkedVideoPlayerScreen from "../components/screens/LinkedVideoPlayerScreen";
import MainTitleScreen from "../components/screens/MainTitleScreen";
import NaturalDisatsersImage from "../resources/images/NaturalDisasters.webp";
import PPIIScreen from "../components/screens/PPIIScreen";
import WaterCycleImage from "../resources/images/WaterCycle.webp";
import causesData from "../resources/json/Causes.json";
import consequencesData from "../resources/json/Consequences.json";
import experimentVideo from "../resources/videos/experiment.mp4";

const HomePage = () => {
    const [causesSlides, setCausesSlides] = useState([]);
    const [consequencesSlides, setConsequencesSlides] = useState([]);

    useEffect(() => {
        let causesArray = [];
        let consequencesArray = [];

        for (let elt of causesData) {
            causesArray.push([elt.id, elt.title]);
        }

        for (let elt of consequencesData) {
            consequencesArray.push([elt.id, elt.title]);
        }

        setCausesSlides(causesArray);
        setConsequencesSlides(consequencesArray);
    }, [causesData, consequencesData]);

    return (
        <div className="Page" id="HomePage">
            <MainTitleScreen />
            <PPIIScreen
                screenTitle="Introduction"
                texts={[
                    "Le cycle de l'eau joue un rôle capital au sein de notre climat et de nos microclimats : régulateur, c'est lui qui assure l'équilibre d'une bonne partie de nos écosystèmes. Par cycle de l'eau, on entend l'ensemble des transformations et déplacements que l'eau subit dans notre atmosphère : évaporation pour former des nuages, condensation sous forme de pluie, ruissellement sur les reliefs, remplissage des nappes phréatiques, etc. Le bon déroulement de ces phases est entre autre ce qui permet d'avoir une température stable et appropriée, des terres viables, des précipitations modérées, etc.",
                    "Cependant, de par les activités d'origine anthropique, ce cycle de l'eau se retrouve perturbé, et les effets, nous les connaissons bien : montée des eaux, réchauffement de la planète, etc. Le pire étant que cet équilibre, si bien régulé à la base, lorsqu'il se retrouve modifié, va s'influencer lui-même pour s'inscrire dans un cercle vicieux empirant d'autant plus la situation, et ce de manière totalement autonome. Mais comment ce phénomène se déroule-t-il exactement ? Comment est-il lié aux problématiques de notre époque ? En d'autres mots, en quelle mesure peut-on considérer les perturbations du cycle de l'eau à la fois comme cause et conséquence du réchauffement climatique ?",
                ]}
                images={[WaterCycleImage, NaturalDisatsersImage]}
            />
            <LinkedVideoPlayerScreen
                screenTitle="L'Expérience"
                video={experimentVideo}
                buttonText="Cliquez pour voir les détails de l'expérience !"
                href="/Experience"
            />
            <AutoSlidingBackgroundScreen
                AutoSlidingBackgroundID="CausesAutoSlidingBackground"
                screenTitle="Les Causes"
                slides={causesSlides}
                href="/Causes"
                buttonText="Cliquez pour voir les causes en détail !"
            />
            <AutoSlidingBackgroundScreen
                AutoSlidingBackgroundID="ConsequencesAutoSlidingBackground"
                screenTitle="Les Conséquences"
                slides={consequencesSlides}
                href="/Consequences"
                buttonText="Cliquez pour voir les conséquences en détail !"
            />
            <AutoSlidingBackgroundScreen
                AutoSlidingBackgroundID="RetroactionsAutoSlidingBackground"
                screenTitle="Le Cercle Vicieux"
                slides={[["Retroactions", "Les Rétroactions"]]}
                href="/Retroactions"
                buttonText="Cliquez pour en apprendre plus sur comment ces perturbations s'auto-influencent !"
            />
            <AutoSlidingBackgroundScreen
                AutoSlidingBackgroundID="QuizAutoSlidingBackground"
                screenTitle="Quiz"
                slides={[["Quiz", "Quiz !"]]}
                href="https://www.edumedia-sciences.com/fr/media/152-quiz-cycle-de-leau"
                buttonText="Cliquez pour vérifier vos connaissances !"
            />
        </div>
    );
};

export default HomePage;
