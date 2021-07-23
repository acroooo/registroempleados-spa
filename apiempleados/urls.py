from django.urls import include, path
from rest_framework import routers

from .views import EmpleadoViewSet

router = routers.DefaultRouter()
router.register(r'empleado', EmpleadoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
