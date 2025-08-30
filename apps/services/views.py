from rest_framework import viewsets, permissions
from .serializers import ServiceSerializer
from .models import Service
# Create your views here.

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Service.objects.filter(is_active=True).order_by('order')
    serializer_class = ServiceSerializer
