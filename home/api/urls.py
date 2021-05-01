from .views import ProductListView,ListProductListView,ProductDetailView
from django.urls import path

urlpatterns = [
    path('products/',ProductListView.as_view(),name='products'),
    path('listproducts/',ListProductListView.as_view(),name='listproducts'),
    path('product/<slug>/',ProductDetailView.as_view(),name='product-details')
]

