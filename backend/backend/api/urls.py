from rest_framework.routers import DefaultRouter
from users.api.urls import router as user_router
from products.api.urls import product_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(user_router.registry)
router.registry.extend(product_router.registry)

urlpatterns = [
    path('api/', include(router.urls)),
]