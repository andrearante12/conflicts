from django.db import models
from jsonfield import JSONField
import datetime


# Create your models here.

class Todo(models.Model):
    name = models.CharField(max_length=50, unique=True)
    completed = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()


class Roadmap(models.Model):
    text = models.CharField(max_length=25, default="My Roadmap")

    def __str__(self):
        return f"{self.text}"


class Stage(models.Model):
    text = models.CharField(max_length=25, unique=True, default="Stage")
    roadmap = models.ForeignKey(to=Roadmap, on_delete=models.CASCADE)
    stage_num = models.IntegerField()
    step = models.JSONField()
    descriptions = models.JSONField()

    def __str__(self):
        return f"This is stage {self.stage_num} in roadmap {self.roadmap}"


# class Step(models.Model):
#     text = models.CharField(max_length=25, unique=True, default="Step")    
#     stage = models.ForeignKey(to=Stage, on_delete=models.CASCADE)

#     def __str__(self):
#         return f"This is a step in {self.stage}"


# class Description(models.Model):
#     text = models.CharField(max_length=25, unique=True, default="My Roadmap")
#     step = models.ForeignKey(to=Step, on_delete=models.CASCADE)

#     def __str__(self):
#         return f"This is a description for {self.step}"

