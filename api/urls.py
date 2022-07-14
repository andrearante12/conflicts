from django.urls import path
from .views import *

urlpatterns = [
    # Endpoints for creating todos
    path('mytodos', TodoView.as_view()),
    path('createtodo', CreateTodoView.as_view()),

    # Endpoints for creating and viewing roadmaps
    path('roadmaps', RoadmapView.as_view()),
    path('createroadmaps', CreateRoadmapView.as_view()),
    path('viewstages', StageView.as_view()),

    # API Routes
    path("stages/<str:roadmap>", stages, name="stages"),
    # path("steps/<str:stage>", steps, name="steps")
]
