from django.contrib import admin

from .models import Empleado


# Register your models here.
class EmpleadoAdmin(admin.ModelAdmin):
    lista = ['nombre_completo', 'email', 'contacto', 'direccion']
admin.site.register(Empleado, EmpleadoAdmin)
