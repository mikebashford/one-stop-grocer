from rest_framework.viewsets import ModelViewSet
from .serializer import ProductsSerializer
from ..models import Products

class ProductsViewSet(ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer