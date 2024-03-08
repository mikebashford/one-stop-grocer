from rest_framework.viewsets import ModelViewSet
from users.models import Users
from users.api.serializers import UsersSerializer

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer