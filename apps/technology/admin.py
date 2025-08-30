from django.contrib import admin
from .models import Technology, Category

# Register your models here.
@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon', 'url', 'level')
    search_fields = ('name',)
    ordering = ('name', )

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    filter_horizontal = ('technologies',)