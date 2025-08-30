from .views import ContactInfoAPIView, SocialNetworkViewSet, ContactMessageCreateView
from django.urls import path

urlpatterns = [
    path('socials/', SocialNetworkViewSet.as_view({'get': 'list'}), name='socialnetwork-list'),
    path('info/', ContactInfoAPIView.as_view(), name='contact-info'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact-message-create'),
]
