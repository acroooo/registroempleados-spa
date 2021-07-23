from rest_framework import serializers

from .models import *


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ('id', 'nombre_completo', 'email', 'contacto', 'direccion')

        