from django.db import models

# Create your models here.
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    subject = models.CharField(max_length=200, blank=True, null=True)  # opcional
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mensaje de {self.name} - {self.subject or 'Sin asunto'}"


class SocialNetwork(models.Model):
    name = models.CharField(max_length=50, unique=True)  # Ej: "Facebook", "LinkedIn"
    url = models.URLField()
    icon = models.CharField(max_length=50, blank=True)  # para mostrar íconos en frontend
    order = models.IntegerField(default=0)  # para controlar orden en el frontend
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class ContactInfo(models.Model):
    email = models.EmailField()
    whatsapp = models.CharField(max_length=20)
    work_days = models.CharField(max_length=100, default="Lunes - Viernes")
    work_hours = models.CharField(max_length=50, default="9:00 AM - 6:00 PM")
    saturday_hours = models.CharField(max_length=50, blank=True, null=True)
    sunday_hours = models.CharField(max_length=50, blank=True, null=True)
    
    def __str__(self):
        return "Información de contacto"
    
    class Meta:
        verbose_name = "Información de contacto"
        verbose_name_plural = "Información de contacto"
