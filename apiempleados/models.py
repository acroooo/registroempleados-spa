from django.db import models
from phone_field import PhoneField


# Create your models here.
class Empleado(models.Model):
    nombre_completo = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    contacto = PhoneField(blank=True, help_text="Teléfono de contacto")
    direccion = models.TextField()
    
    def __str__(self):
        return f"{self.id}: {self.nombre_completo} :: {self.direccion} :: {self.contacto} :: {self.email}"
