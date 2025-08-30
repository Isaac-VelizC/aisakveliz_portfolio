from apps.technology.serializers import TechnologySerializer
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = (
            'id', 'title', 'slug', 'description', 'image',
            'repository_url', 'demo_url', 'status',
            'views', 'stars', 'created_at', 'updated_at',
            'technologies'
        )
