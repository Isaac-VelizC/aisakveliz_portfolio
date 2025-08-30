from django.utils.html import format_html
from .models import Project
from django.contrib import admin
from django.db.models import F

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'views', 'stars', 'created_at', 'image_tag')
    list_filter = ('status', 'technologies', 'created_at')
    search_fields = ('title', 'description')
    ordering = ('-created_at',)
    filter_horizontal = ('technologies',)  # selección visual para ManyToMany
    readonly_fields = ('views', 'stars', 'created_at', 'updated_at')

    prepopulated_fields = {"slug": ("title",)}

    # Mostrar imagen en la lista
    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="width:60px;height:40px;object-fit:cover;" />', obj.image.url)
        return "-"
    image_tag.short_description = 'Imagen'

    # Resaltar proyectos con muchas estrellas
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.annotate(_stars=F('stars'))

    # Opcional: acciones masivas para cambiar status
    actions = ['make_published', 'make_draft', 'make_archived']

    def make_published(self, request, queryset):
        queryset.update(status='published')
    make_published.short_description = "Marcar como Publicado"

    def make_draft(self, request, queryset):
        queryset.update(status='draft')
    make_draft.short_description = "Marcar como Borrador"

    def make_archived(self, request, queryset):
        queryset.update(status='archived')
    make_archived.short_description = "Marcar como Archivado"
