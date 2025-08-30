from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from utils.messageUtils import ERRORS
from django.db import models
import uuid

# Create your models here.
class Permission(models.Model):
    name = models.CharField(max_length=100)
    module = models.CharField(max_length=50, null=True, blank=True)
    action = models.CharField(max_length=50, null=True, blank=True)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.module}.{self.action}"
    
class Role(models.Model):
    name = models.CharField(max_length=50)
    permissions = models.ManyToManyField(Permission, blank=True)

    def __str__(self):
        return self.name
    
# Create your models here.   
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username=None, password=None, **extra_fields):
        if not email:
            raise ValueError(ERRORS('email_required'))
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('El superusuario debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('El superusuario debe tener is_superuser=True.')
        if not password:
            raise ValueError('El superusuario debe tener una contraseña.')

        return self.create_user(email, username, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    completed_onboarding = models.BooleanField(default=False)
    soft_deletes = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
