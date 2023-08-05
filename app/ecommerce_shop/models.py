from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# Create Customer Model
class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Create Product Model
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    digital = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return self.name