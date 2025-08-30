from apps.technology.models import Technology
from cloudinary.models import CloudinaryField
from django.utils.text import slugify
from django.db import models
import uuid
# -------------------------------------------------
# Proyecto
# -------------------------------------------------
class Project(models.Model):
    STATUS_CHOICES = [
        ("draft", "Draft"),
        ("published", "Published"),
        ("planned", "Planned")
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique=True, blank=True)
    description = models.TextField()
    image = CloudinaryField("projects")
    repository_url = models.URLField(blank=True, null=True) # File URL
    demo_url = models.URLField(blank=True, null=True) # Preview
    date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="draft")
    technologies = models.ManyToManyField(Technology, related_name="projects", blank=True)
    views = models.PositiveIntegerField(default=0)
    stars = models.PositiveIntegerField(default=0)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    