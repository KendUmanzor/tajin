from django.urls import path
from django.urls import re_path as url
from rest_framework import routers
from .api import empleadoViewSet
from rest_framework.documentation import include_docs_urls

router =routers.DefaultRouter()

router.register('api/empleado',empleadoViewSet,'empleado')

    
urlpatterns = router.urls
