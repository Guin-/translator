from rest_framework import serializers
from .models import Translation

class TranslationSerializer(serializers.ModelSerializer):
    language = serializers.CharField(read_only=True)
    translation = serializers.CharField(read_only=True)

    class Meta:
        model = Translation
        fields = ('id', 'input_text', 'language', 'translation', 'timestamp')

