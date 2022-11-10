from .serializers import NoteSerializer
from rest_framework import generics

from notes.models import Note


class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.none()
    serializer_class = NoteSerializer

    def get_queryset(self):
        if user := self.request.user:
            return Note.objects.filter(author=user)
        return Note.objects.none()


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.none()
    serializer_class = NoteSerializer

    def get_queryset(self):
        if user := self.request.user:
            return Note.objects.filter(author=user)
        return Note.objects.none()
