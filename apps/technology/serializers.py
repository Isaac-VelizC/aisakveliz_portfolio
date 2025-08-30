from rest_framework import serializers
from .models import Technology, Category

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('id', 'name', 'level', 'icon', 'url')

class CategorySerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'technologies')