from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UsersViewSet

router = DefaultRouter()
router.register(r'users', UsersViewSet)

urlpatterns = [
    path('users/', UsersViewSet.as_view({'get': 'list'})),
]