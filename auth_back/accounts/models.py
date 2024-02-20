from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db.models.signals import pre_save
from django.dispatch import receiver
import uuid

# def generate_unique_username(instance):
#     while True:
#         username = uuid.uuid4().hex[:30]  # genera un UUID y lo corta a 30 caracteres
#         if not UserAccount.objects.filter(username=username).exists():
#             return username

# class UserAccountManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)

#         user.set_password(password)
#         user.save()

#         return user
    
#     def create_superuser(self, email, password, **extra_fields):
#         user = self.create_user(email, password, **extra_fields)

#         user.is_superuser = True
#         user.is_staff = True
    
#         user.save()

#         return user

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        # if not username:
        #     raise ValueError('Users must have a username')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, username, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password=password, **extra_fields)


class UserAccount(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    username = models.CharField(max_length=255, unique=True, blank=True, null=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] #'username', 'first_name', 'last_name',

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email
    
    def __str__(self):
        return self.email

# @receiver(pre_save, sender=UserAccount)
# def set_new_user_username(sender, instance, **kwargs):
#     if not instance.username:
#         instance.username = generate_unique_username(instance)
