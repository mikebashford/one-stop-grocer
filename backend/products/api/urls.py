from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProductsViewSet

product_router = DefaultRouter()
product_router.register(r'products', ProductsViewSet)

urlpatterns = [
    path('products/', ProductsViewSet.as_view({'get': 'list'})),
]