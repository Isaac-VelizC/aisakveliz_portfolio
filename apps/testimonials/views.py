from rest_framework import viewsets, permissions
from .serializers import TestimonialSerializer
from .models import Testimonial
# Create your views here.
class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Testimonial.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = TestimonialSerializer