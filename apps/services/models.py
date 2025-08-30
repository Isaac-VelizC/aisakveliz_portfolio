from django.utils.text import slugify
from django.db import models

# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
