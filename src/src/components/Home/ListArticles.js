import React from 'react';
import Article from './Article';



const ListArticles =()=>{
        return(
            <section>
                <div className="container py-5 mt-5">
                    <div className="grid-container">
                        <Article img='/images/article1.jpg' cardTitle="RÉCUPÉRER APRÉS L'ENTRAINEMENT" text="Pour continuer à faire de votre mieux, votre corps a besoin de récupérer correctement après des séances d'entraînement intenses. Découvrez des produits qui peuvent soutenir votre récupération" />
                        <Article img='/images/article2.jpg' cardTitle="CONTINUER PENDANT L'ENTRAINEMENT" text="Découvrez des produits qui aident à épargner les tissus musculaires d'une dégradation excessive et à réduire la fatigue, lorsqu'ils sont utilisés avant ou pendant l'entraînement" />
                        <Article img='/images/article3.jpg' cardTitle="CONTINUER PENDANT L'ENTRAINEMENT" text="Découvrez des produits qui aident à épargner les tissus musculaires d'une dégradation excessive et à réduire la fatigue, lorsqu'ils sont utilisés avant ou pendant l'entraînement." />
                    </div>
                </div>
            </section>
        )
    }

export default ListArticles;