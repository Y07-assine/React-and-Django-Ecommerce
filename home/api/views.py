from rest_framework.generics import ListAPIView, RetrieveAPIView
from drf_multiple_model.views import ObjectMultipleModelAPIView
from home.models import Product,Category,ProductFlavor,Flavor,Brand
from rest_framework.permissions import AllowAny
from .serializers import ProductSerializer,CategorySerializer,BrandSerializer,ProductFlavorSerializer
from django.db.models import F,Q

class ProductListView(ObjectMultipleModelAPIView):

    querylist = [
        {'queryset':Product.objects.all().filter(category = 2),'serializer_class':ProductSerializer,'label':'pack'},
        {'queryset':Product.objects.all().filter( ~Q(category = 2)).order_by(F('id').desc())[:6],'serializer_class':ProductSerializer,'label':'product'},
        {'queryset':Product.objects.all().filter( ~Q(category = 2)).order_by('?')[:6],'serializer_class':ProductSerializer,'label':'latest_product'}
    ]

    
class ListProductListView(ObjectMultipleModelAPIView):
    querylist =[
        {'queryset':Product.objects.all(),'serializer_class':ProductSerializer,'label':'product'},
        {'queryset':Category.objects.all(),'serializer_class':CategorySerializer,'label':'category'},
        {'queryset':Brand.objects.all(),'serializer_class':BrandSerializer,'label':'brand'}
    ]

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

class ProductFlavorView(RetrieveAPIView):
    queryset = ProductFlavor.objects.all()
    serializer_class = ProductFlavorSerializer
    lookup_field = Product.objects.filter(slug = 'slug')