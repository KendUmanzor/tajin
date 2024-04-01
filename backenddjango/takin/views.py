from django.shortcuts import render
from rest_framework import generics
from takin.models import empleado
from backenddjango.takin.serializador import empleadoSerializer
# Create your views here.

class empleadoList(generics.ListCreateAPIView):
    queryset=empleado.objects.all()
    serializer_class =empleadoSerializer()
