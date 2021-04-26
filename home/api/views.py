from rest_framework.generics import ListAPIView
from home.models import Product,Category,ProductFlavor,Flavor
from rest_framework.permissions import AllowAny
from .serializers import ProductSerializer
from django.db.models import F,Q

class ProductListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

