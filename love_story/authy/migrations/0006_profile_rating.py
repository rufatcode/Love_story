# Generated by Django 4.2 on 2023-05-02 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authy', '0005_profile_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='rating',
            field=models.IntegerField(blank=True, max_length=150, null=True),
        ),
    ]
