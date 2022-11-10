from rest_framework import serializers
from .models import Note
from django.contrib.auth.models import User


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'body', 'updated']

    def create(self, validated_data):
        if user := self.context['request'].user:
            return Note.objects.create(author=user, **validated_data)
        return serializers.ValidationError('Can not find the user')
