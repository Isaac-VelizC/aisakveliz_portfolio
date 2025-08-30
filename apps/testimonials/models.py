from django.core.validators import MaxValueValidator, MinValueValidator
from cloudinary.models import CloudinaryField
from django.db import models
# -------------------------------------------------
# Testimonios
# -------------------------------------------------
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    photo = CloudinaryField("photo", blank=True, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], blank=True, null=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.profession})" if self.profession else self.name
