import React, { Component } from 'react';


class Newslettre extends Component{
    render(){
        return(

            <section className="section newsletter" id="contact">
                <div className="container">
                    <div className="newsletter__content">
                        <div className="newsletter__data">
                            <h3>NEWSLETTER</h3>
                            <p>S’inscrire pour recevoir nos offres exclusives</p>
                        </div>
                        <form action="#">
                            <input type="email" placeholder="Enter your email address" className="newsletter__email" />
                            <a className="newsletter__link" href="#">subscribe</a>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Newslettre;