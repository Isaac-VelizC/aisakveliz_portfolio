from rest_framework import viewsets, permissions
from .models import Technology, Category
from .serializers import TechnologySerializer, CategorySerializer

class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    pagination_class = None  # Desactiva paginación aquí


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None  # Desactiva paginación aquí
