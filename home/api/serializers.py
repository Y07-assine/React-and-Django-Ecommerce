from rest_framework import serializers
from home.models import Product,Category,Brand,Flavor,ProductFlavor

class ProductSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source='brand.name')
    class Meta:
        model = Product
        fields =(
            'title',
            'price',
            'discount_price',
            'category',
            'brand_name',
            'slug',
            'description',
            'image',
            'details',
            'useCase',
            'fiche_tec'
        )