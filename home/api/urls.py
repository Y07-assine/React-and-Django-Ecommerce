from .views import (
    ProductListView,
    ListProductListView,
    ProductDetailView,
    ProductFlavorView,
    AddToCartView,
    UserIDView
    )

from django.urls import path

urlpatterns = [
    path('products/',ProductListView.as_view(),name='products'),
    path('listproducts/',ListProductListView.as_view(),name='listproducts'),
    path('product/<slug>/',ProductDetailView.as_view(),name='product-details'),
    path('flavor/<slug>/',ProductFlavorView.as_view(),name='product-flavor'),
    path('add-to-cart/',AddToCartView.as_view(),name='add-to-cart'),
    path('userid',UserIDView.as_view(),name='userid'),
]

