from django.shortcuts import render
from rest_framework import generics
from takin.models import empleado
from backenddjango.takin.serializador import empleadoSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
# Create your views here.

class empleadoList(generics.CreateAPIView):
    queryset=empleado.objects.all()
    serializer_class =empleadoSerializer()
    

