from rest_framework.generics import ListAPIView, RetrieveAPIView
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.views import APIView 
from home.models import Product,Category,ProductFlavor,Flavor,Brand,Order,OrderProduct
from rest_framework.permissions import AllowAny
from .serializers import ProductSerializer,CategorySerializer,BrandSerializer,ProductFlavorSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.db.models import F,Q
from django.shortcuts import render ,get_object_or_404


class UserIDView(APIView):
    def get(self,request,*args,**kwargs):
        return Response({'userID':request.user.id,'user':request.user},status=HTTP_200_OK)

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

class ProductFlavorView(ListAPIView):
    queryset = ProductFlavor.objects.all()
    serializer_class = ProductFlavorSerializer
    
    def get_queryset(self):
        product = get_object_or_404(Product,slug=self.kwargs['slug'])
        return ProductFlavor.objects.filter(product = product)
    

class AddToCartView(APIView):

    def post(self,request, *args, **kwargs):
        slug = request.data.get('slug',None)
        flavor = request.data.get('variantflavor',None)
        quantity = request.data.get('quantite',1)
        if (slug is None and flavor is None):
            return Response({"message":"Invalid request"},status=HTTP_400_BAD_REQUEST)
        product = get_object_or_404(Product, slug=slug) 
        order_prod, created = OrderProduct.objects.get_or_create(
            product = product,
            user = request.user,
            flavor = flavor,
            ordered = False
        )
        
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            if order.products.filter(product__slug=product.slug,flavor=flavor).exists():
                print(qt)
                order_prod.quantity = order_prod.quantity + int(qt)
                order_prod.save()
                
            else:
                order_prod.quantity = int(qt)
                order_prod.save()
                order.products.add(order_prod)
        else:
            ordered_date = timezone.now()
            order = Order.objects.create(user=request.user, ordered_date=ordered_date)
            order.products.add(order_prod)
        return Response(status=HTTP_200_OK)