from __future__ import unicode_literals

from django.db import models

class Translation(models.Model):
    input_text = models.CharField(max_length=500)
    language = models.CharField(max_length=50)
    translation = models.CharField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

