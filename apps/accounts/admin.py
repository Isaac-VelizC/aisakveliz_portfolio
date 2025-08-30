from django.contrib import admin
from .models import Role, User, Permission

# Register your models here.
admin.site.register(Role)
admin.site.register(Permission)

# -------------------------------------------------
# About
# -------------------------------------------------
@admin.register(User)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'is_active', 'is_staff')
    search_fields = ('email', )
