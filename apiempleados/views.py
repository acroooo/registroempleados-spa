from django.shortcuts import render
from rest_framework import viewsets

from .models import Empleado
from .serializers import EmpleadoSerializer

# Create your views here.

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
