from django.db import models

# Create your models here.


class Event(models.Model):
    name = models.CharField(max_length=50, unique=True)
    completed = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True)

