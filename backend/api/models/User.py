from django.db import models
import os
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser, PermissionsMixin

class UserManager (BaseUserManager):

    #Handler to create a normal user
    def create_user(self,email,last_name,first_name,phone,password):
        user= self.model()
        user.email = self.normalize_email(email)
        user.phone = phone
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.save(using=self._db)
        return user

    #Hadler to create a superuser
    def create_superuser(self,email,last_name,first_name,phone,password):
        user = self.create_user(email,last_name,first_name,phone,password)
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

    

class User(AbstractBaseUser,PermissionsMixin):
    
    #Camps for a normal user
    email = models.EmailField(unique=True)
    last_name = models.CharField(max_length=100, default="")
    first_name = models.CharField(max_length=100, default="")
    phone = models.IntegerField(default=0,max_length=100)
    status = models.BooleanField(default=False)
    password = models.CharField(max_length=200,default="")
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    provider = models.CharField(default="form",max_length=30)
    avatar = models.CharField(max_length=200,default=os.getenv('DEFAULT_PHOTO_USER'))

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','phone']
    objects = UserManager()
   
    def __str__(self):
        return self.email
