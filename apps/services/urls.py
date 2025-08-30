from .views import ServiceViewSet
from django.urls import path

urlpatterns = [
    path('services/', ServiceViewSet.as_view({'get': 'list'}), name='service-list'),
    path('services/<int:pk>/', ServiceViewSet.as_view({'get': 'retrieve'}), name='service-detail'),
]
