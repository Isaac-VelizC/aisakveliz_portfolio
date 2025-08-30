from django.contrib import admin
from django.utils.html import format_html
from .models import (ContactMessage, SocialNetwork, ContactInfo)
# -------------------------------------------------
# Contact Messages
# -------------------------------------------------
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'is_read', 'created_at')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message', 'subject')
    readonly_fields = ('created_at',)

# -------------------------------------------------
# Social Networks
# -------------------------------------------------
@admin.register(SocialNetwork)
class SocialNetworkAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon_tag', 'url', 'order')
    search_fields = ('name',)
    ordering = ('order',)

    def icon_tag(self, obj):
        if obj.icon:
            return format_html('<i class="{}" style="font-size:20px;"></i>', obj.icon)
        return "-"
    icon_tag.short_description = 'Icono'

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('email', 'whatsapp', 'work_days', 'work_hours', 'saturday_hours', 'sunday_hours')
    readonly_fields = ('email',)
