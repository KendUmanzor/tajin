from .models import empleado
from rest_framework import viewsets,permissions
from .serializador import empleadoSerializer

class empleadoViewSet(viewsets.ModelViewSet):
    queryset= empleado.objects.all()
    permission_classes=[permissions.AllowAny]
    serializer_class=empleadoSerializer