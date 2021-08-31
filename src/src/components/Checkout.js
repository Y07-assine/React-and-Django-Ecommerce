import React from 'react';

const Checkout=()=>{
    return(
       /* <section class="form py-5">
    <div class="container py-5 mt-5">
        <div class="row">
            <div class="col-sm-6 border">
                <h5 class="px-5 pt-3">Informations Personnelles</h5>
                <hr>
                
                <form method='POST'>
                    <h6 class="pt-5">Prénom :</h6>
                    {{form.firstname}}
                    <h6 class="pt-3">Nom :</h6>
                    {{form.lastname}}
                    <h6 class="pt-3">Adresse :</h6>
                    {{form.apartment_address}}
                    <h6 class="pt-3">Code postal :</h6>
                    {{form.zip}}
                    <h6 class="pt-3">Ville :</h6>
                    {{form.city}}
                    <h6 class="pt-3">Téléphone :</h6>
                    {{form.phone}}
                    <div class="d-block my-3">
                    <h6 class="pt-3 py-3">Mode de payment :</h6>
                        {% for value,name in form.fields.payment_option.choices %}
                        <div class="custom-control custom-radio">
                        <input id="{{ name }}" name="payment_option" value="{{ value }}" type="radio" class="radio">
                        <label >{{name}}</label>
                        </div>
                        {% endfor %}
                    </div>
                    <button type="submit" value="Continuer" class="cnx mb-5" >Confirmer votre demande</button>
                </form>

            </div>
            <div class="col-sm-6 ">
                <div class=" border" style="display: block;">
                    <div class=" d-flex total py-5">
                        <h6 class="font-baloo font-size-20 color-primary mt-1 ml-5 ">APERÇU</h6>
                        <h6 class="font-baloo font-size-20 mt-1 mr-5 ">{{ order.get_nomber_article }} Articles</h6>

                    </div>
                    {% for order_product in order.products.all %}
                    <div class="row py-5 ">
                        <div class="col-sm-3">
                            <img src="{{ order_product.product.image.url }}" alt="product" id="cart__product" class="img-fluid" style="display: flex; justify-content: center; height: 80px; width: 80px; ">
                        </div>
                        <div class="col-sm-6">
                            <small class="font-baloo color-primary"><strong>{{ order_product.product.title }}</strong></small><br>
                            <small>{{ order_product.product.brand }}</small><br>
                            <small class="  color-primary mt-2"><span class="color-grey">Vanille</span></small><br>
                            <small class="color-primary mt-2">Quantite : <span class="color-grey">{{ order_product.quantity }}</span></small>
                        </div>
                         <div class="col-sm-3 text-right">
                            <span class="font-baloo font-size-20 " id="price"><strong>
                            {% if order_product.product.discount_price %}
                                {{ order_product.get_total_product_discountprice }}0 Dhs
                            {% else %}
                                {{ order_product.get_total_product_price }}0 Dhs
                            {% endif %}
                            </strong></span><br>
                            
                        </div>
                    </div>
                    {% endfor %}
                        <hr>
                    <div class=" d-flex total py-5">
                        <h6 class="font-baloo font-size-16 color-primary mt-1 ml-5 ">Total TTC</h6>
                        <span class="font-baloo font-size-16 mt-1 mr-5" id="price"><strong>{{ order.get_total }}0 Dhs</strong></span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>*/<></>
    )
}