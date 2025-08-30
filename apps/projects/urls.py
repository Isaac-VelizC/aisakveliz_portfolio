from .views import ProjectViewSet
from django.urls import path

urlpatterns = [
    path('project/', ProjectViewSet.as_view({'get': 'list'}), name='project-list'),
    path('project/<int:pk>/', ProjectViewSet.as_view({'get': 'retrieve'}), name='project-detail'),
]
