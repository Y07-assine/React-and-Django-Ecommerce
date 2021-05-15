from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from home.models import Order, Product,Category,Brand,Flavor,ProductFlavor,OrderProduct
from django.utils.html import strip_tags


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, data):
        return data

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

class OrderProductSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    total_product_price= serializers.SerializerMethodField()
    total_product_discountprice= serializers.SerializerMethodField()
    amount_saved = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = OrderProduct
        fields = (
            'id',
            'quantity',
            'flavor',
            'product',
            'total_product_price',
            'total_product_discountprice',
            'amount_saved',
            'final_price'

        )

    def get_product(self,obj):
        return ProductSerializer(obj.product).data
    
    def get_total_product_price(self,obj):
        return obj.get_total_product_price()
    
    def get_total_product_discountprice(self,obj):
        return obj.get_total_product_discountprice()

    def get_amount_saved(self,obj):
        return obj.get_amount_saved()

    def get_final_price(self,obj):
        return obj.get_final_price()

class OrderSerializer(serializers.ModelSerializer):
    order_products = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()
    nomber_article = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = (
            'id',
            'order_products',
            'total',
            'nomber_article'
        )

    def get_order_products(self,obj):
        return OrderProductSerializer(obj.products.all(),many=True).data

    def get_total(self,obj):
        return obj.get_total()

    def get_nomber_article(self,obj):
        return obj.get_nomber_article()