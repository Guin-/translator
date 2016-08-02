from __future__ import unicode_literals
from django.db import models

from .translation_service import translate_to_en

class Translation(models.Model):
    input_text = models.CharField(max_length=500)
    language = models.CharField(max_length=50)
    translation = models.CharField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    # TODO: handle case where translation fails?
    def save(self, *args, **kwargs):
        self.language, self.translation = translate_to_en(self.input_text)
        super(Translation, self).save(*args, **kwargs)

