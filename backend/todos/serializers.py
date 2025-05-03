from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    def validate_title(self, value):
        if len(value.strip()) == 0:
            raise serializers.ValidationError('Title cannot be empty')
        return value
        if len(value.strip()) < 3:
            raise serializers.ValidationError('Title must be at least 3 characters long')
        return value

    class Meta:
        model = Todo
        fields = ['id', 'title', 'completed']