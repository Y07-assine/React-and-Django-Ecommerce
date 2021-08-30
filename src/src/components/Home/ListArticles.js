import React from 'react';
import Article from './Article';
import item1 from '../../img/article1.jpg';
import item2 from '../../img/article2.jpg';
import item3 from '../../img/article3.jpg';


const ListArticles =()=>{
        return(
            <section>
                <div className="container py-5 mt-5">
                    <div className="grid-container">
                        <Article img={item1} cardTitle="RÉCUPÉRER APRÉS L'ENTRAINEMENT" text="Pour continuer à faire de votre mieux, votre corps a besoin de récupérer correctement après des séances d'entraînement intenses. Découvrez des produits qui peuvent soutenir votre récupération" />
                        <Article img={item2} cardTitle="CONTINUER PENDANT L'ENTRAINEMENT" text="Découvrez des produits qui aident à épargner les tissus musculaires d'une dégradation excessive et à réduire la fatigue, lorsqu'ils sont utilisés avant ou pendant l'entraînement" />
                        <Article img={item3} cardTitle="CONTINUER PENDANT L'ENTRAINEMENT" text="Découvrez des produits qui aident à épargner les tissus musculaires d'une dégradation excessive et à réduire la fatigue, lorsqu'ils sont utilisés avant ou pendant l'entraînement." />
                    </div>
                </div>
            </section>
        )
    }

export default ListArticles;