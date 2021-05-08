from rest_framework import serializers
from home.models import Product,Category,Brand,Flavor,ProductFlavor
from django.utils.html import strip_tags
import json

class ProductSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source='brand.name')
    category = serializers.CharField(source='category.title')
    amount_saved = serializers.SerializerMethodField()
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
            'fiche_tec',
            'amount_saved',
        )
    def get_amount_saved(self,obj):
        return obj.get_amount_saved()


    def to_representation(self,instance):
        data = super().to_representation(instance)
        data['details']=strip_tags(instance.details)
        
        return data

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields='__all__'
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields='__all__'

class ProductFlavorSerializer(serializers.ModelSerializer):
    flavor = serializers.CharField(source='flavor.name')
    class Meta:
        model = ProductFlavor
        fields=('flavor',
                'product',
                'quantity'
            )