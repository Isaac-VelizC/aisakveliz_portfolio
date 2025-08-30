from django.utils.html import format_html
from django.contrib import admin
from .models import Service

# -------------------------------------------------
# Services
# -------------------------------------------------
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order', 'is_active')
    search_fields = ('title', 'description')
    ordering = ('order',)

    def icon_tag(self, obj):
        if obj.icon:
            return format_html('<i class="{}" style="font-size:20px;"></i>', obj.icon)
        return "-"
    icon_tag.short_description = 'Icono'
