from rest_framework import serializers
from home.models import Product,Category,Brand,Flavor,ProductFlavor

class ProductSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source='brand.name')
    category = serializers.CharField(source='category.title')
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

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields='__all__'
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields='__all__'

