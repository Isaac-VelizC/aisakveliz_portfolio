from django.utils.html import format_html
from django.contrib import admin
from .models import Testimonial

# Register your models here.
@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'profession', 'rating', 'is_published', 'created_at', 'updated_at')
    search_fields = ('name', 'message')
    list_filter = ('profession', 'rating', 'created_at', 'is_published')
    readonly_fields = ('created_at', 'updated_at')
    ordering = ('is_published', '-created_at')

    def photo_tag(self, obj):
        if obj.photo:
            return format_html('<img src="{}" style="width:50px;height:50px;border-radius:50%;" />', obj.photo.url)
        return "-"
    photo_tag.short_description = "Foto"
