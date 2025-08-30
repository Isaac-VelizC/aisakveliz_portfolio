from django.contrib import admin
from .models import About
# -------------------------------------------------
# About
# -------------------------------------------------
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at')
    readonly_fields = ('updated_at',)
