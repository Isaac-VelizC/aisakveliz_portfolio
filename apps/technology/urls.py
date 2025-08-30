from .views import CategoryViewSet, TechnologyViewSet
from django.urls import path

urlpatterns = [
    path('technology/', TechnologyViewSet.as_view({'get': 'list'}), name='technology-list'),
    path('category/', CategoryViewSet.as_view({'get': 'list'}), name='category-list'),
]
