from rest_framework import viewsets, permissions
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.filter(status='published').order_by('-created_at')
    serializer_class = ProjectSerializer