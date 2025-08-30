from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AboutSerializer
from .models import About
# Create your views here.
class AboutSingleAPIView(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        about = About.objects.first()
        serializer = AboutSerializer(about)
        return Response(serializer.data)