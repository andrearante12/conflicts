from multiprocessing import Event
from django.http import JsonResponse
from django.shortcuts import render
from matplotlib.font_manager import json_dump
from rest_framework import generics, status
from .serializers import *
from .models import Todo, Roadmap

from rest_framework.views import APIView
from rest_framework.response import Response

import json
from django.core.serializers import serialize
# Create your views here.

def stages(request, roadmap):
    pass
    # queryset = Stage.objects.filter(roadmap=roadmap)

    # if stages:
    #     serialized_q = json.loads(serialize('json', queryset))
    #     return JsonResponse(serialized_q, safe=False)

# def steps(request, stage):
#     q_stage = Stage.objects.filter(text=stage)[0].id
#     queryset = Step.objects.filter(id=q_stage).values()

#     if stages:
#         return JsonResponse(list(queryset), safe=False)

class TodoView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class StageView(generics.ListAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class RoadmapView(generics.ListAPIView):
    queryset = Roadmap.objects.all()
    serializer_class = RoadmapSerializer

class CreateRoadmapView(APIView):
    serializer_class = CreateRoadmapSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():   
            text = serializer.data.get('text')

            queryset = Roadmap.objects.filter(text=text)
            if queryset.exists():
                roadmap = queryset[0]
                roadmap.text = text
                roadmap.save(update_fields=['text'])

            else:
                roadmap = Roadmap(text=text)
                roadmap.save()

            return Response(RoadmapSerializer(roadmap).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateTodoView(APIView):
    serializer_class = CreateTodoSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():   
            name = serializer.data.get('name')
            completed = serializer.data.get('completed')
            due_date = serializer.data.get('due_date')

            queryset = Todo.objects.filter(name=name)
            if queryset.exists():
                todo = queryset[0]
                todo.name = name
                todo.completed = completed
                todo.save(update_fields=['name', 'completed', 'due_date'])

            else:
                todo = Todo(name=name, completed=completed, due_date=due_date)
                todo.save()

            return Response(TodoSerializer(todo).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

