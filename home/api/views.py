from rest_framework.generics import ListAPIView
from drf_multiple_model.views import ObjectMultipleModelAPIView
from home.models import Product,Category,ProductFlavor,Flavor
from rest_framework.permissions import AllowAny
from .serializers import ProductSerializer
from django.db.models import F,Q

class ProductListView(ObjectMultipleModelAPIView):

    querylist = [
        {'queryset':Product.objects.all().filter(category = 2),'serializer_class':ProductSerializer,'label':'pack'},
        {'queryset':Product.objects.all().filter( ~Q(category = 2)).order_by(F('id').desc())[:6],'serializer_class':ProductSerializer,'label':'product'},
        {'queryset':Product.objects.all().filter( ~Q(category = 2)).order_by('?')[:6],'serializer_class':ProductSerializer,'label':'latest_product'}
    ]

    

