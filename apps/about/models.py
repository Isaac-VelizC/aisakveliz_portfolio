from apps.technology.models import Technology
from cloudinary.models import CloudinaryField
from django.db import models

# -------------------------------------------------
# Información sobre mí Modelo
# -------------------------------------------------
class About(models.Model):
    title = models.CharField(max_length=200, default="Sobre mí")
    content = models.TextField()
    photo = CloudinaryField("photo", blank=True, null=True)
    years_of_experience = models.IntegerField(default=0)
    projects = models.IntegerField(default=0)
    main_technologies = models.ManyToManyField(Technology, related_name='about_technologies', blank=True, null=True)
    cv_file = CloudinaryField("cv_file", blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title