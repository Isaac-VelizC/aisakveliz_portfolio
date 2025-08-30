from django.db import models

# Create your models here.
class Technology(models.Model):
    name = models.CharField(max_length=100, unique=True)
    level = models.PositiveIntegerField(default=1)
    icon = models.CharField(max_length=50, blank=True)
    url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    technologies = models.ManyToManyField(Technology, related_name='categories', blank=True)
