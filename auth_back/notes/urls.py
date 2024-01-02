from django.urls import path
from .views import NoteList, NoteDetail

urlpatterns = [
    path('list/', NoteList.as_view(), name='note-list'),
    path('<int:pk>/', NoteDetail.as_view(), name='note-detail'),
]
