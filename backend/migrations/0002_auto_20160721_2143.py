# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-21 21:43
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='translation',
            options={'ordering': ['-timestamp']},
        ),
    ]
