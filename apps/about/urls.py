from django.urls import path
from .views import AboutSingleAPIView

urlpatterns = [
    path('about/', AboutSingleAPIView.as_view(), name='about-single'),
]
