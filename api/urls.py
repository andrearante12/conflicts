from django.urls import path
from .views import EventView

urlpatterns = [
    path('event', EventView.as_view()),
]
