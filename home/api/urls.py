from .views import ProductListView,ListProductListView
from django.urls import path

urlpatterns = [
    path('products/',ProductListView.as_view(),name='products'),
    path('listproducts/',ListProductListView.as_view(),name='listproducts')
]

