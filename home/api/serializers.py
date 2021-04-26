from rest_framework import serializers
from home.models import Product,Category,Brand,Flavor,ProductFlavor

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =(
            'title',
            'price',
            'discount_price',
            'category',
            'brand',
            'slug',
            'description',
            'image',
            'details',
            'useCase',
            'fiche_tec'
        )