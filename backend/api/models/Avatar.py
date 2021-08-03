
from django.db import models

class Avatar(models.Model):

    public_id = models.CharField(max_length=200,null=True,blank=True)
    photo = models.ImageField(blank=True,null=True,default="user-photo-default.jpg")

    
