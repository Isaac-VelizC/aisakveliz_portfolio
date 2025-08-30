from .views import TestimonialViewSet
from django.urls import path

urlpatterns = [
    path('testimonials/', TestimonialViewSet.as_view({'get': 'list'}), name='testimonial-list'),
    path('testimonials/<int:pk>/', TestimonialViewSet.as_view({'get': 'retrieve'}), name='testimonial-detail'),
]
