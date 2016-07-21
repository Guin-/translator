from rest_framework import serializers
from .models import Translation

class TranslationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Translation
        fields = ('id', 'input_text', 'language', 'translation', 'timestamp')

