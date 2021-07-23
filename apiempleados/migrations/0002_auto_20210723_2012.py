# Generated by Django 3.2.5 on 2021-07-23 20:12

from django.db import migrations, models
import phone_field.models


class Migration(migrations.Migration):

    dependencies = [
        ('apiempleados', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empleado',
            name='contacto',
            field=phone_field.models.PhoneField(blank=True, help_text='Teléfono de contacto', max_length=31, unique=True),
        ),
        migrations.AlterField(
            model_name='empleado',
            name='email',
            field=models.EmailField(max_length=200, unique=True),
        ),
    ]