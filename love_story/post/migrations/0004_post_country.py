# Generated by Django 4.2 on 2023-05-02 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_likes'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='country',
            field=models.TextField(default='Unknown', max_length=150, verbose_name='country'),
        ),
    ]
