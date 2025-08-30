from .serializers import SocialNetworkSerializer, ContactInfoSerializer, ContactMessageSerializer
from rest_framework import viewsets, views, permissions, generics
from .models import SocialNetwork, ContactInfo, ContactMessage
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

class SocialNetworkViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = SocialNetwork.objects.all()
    serializer_class = SocialNetworkSerializer

class ContactInfoAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        contact_info = ContactInfo.objects.first()
        serializer = ContactInfoSerializer(contact_info)
        return Response(serializer.data)

class ContactMessageCreateView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # Personalizar correo
        subject = instance.subject or "Nuevo mensaje de contacto"
        message = (
            f"Has recibido un nuevo mensaje de contacto desde tu portafolio:\n\n"
            f"De: {instance.name} <{instance.email}>\n"
            f"Asunto: {instance.subject or 'Sin asunto'}\n\n"
            f"Mensaje:\n{instance.message}"
        )
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,  # Debes configurarlo en settings.py
            recipient_list=[settings.CONTACT_EMAIL],  # Correo al que llegará
            fail_silently=False,
        )
