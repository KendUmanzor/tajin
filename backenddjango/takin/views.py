from argparse import Action
import json
from urllib import response
from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework import generics,viewsets, status
from takin.models import Empleado,Contrato,Empleador, Postulacion,Oficio,Calificacion
#from takin.serializador import empleadoSerializer
from takin.serializador import EmpleadoSerializer, ContratoSerializer, EmpleadorSerializer, PostulacionSerializer,OficioSerializer, CalificacionSerializer
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, JsonResponse
from.models import Empleado, Empleador



def login(request, *args, **kwargs):
    if request.method == 'POST':
        e=json.loads(request.body.decode('utf-8'))
        try:
            empleado = Empleador.objects.get(email=e['email'])
            if empleado.password == e['password']:
                return JsonResponse({'success': True,'data':{'email':empleado.email,'password':empleado.password}})
            else:
                return JsonResponse({'Error': 'La contraseña es incorrecta'})
        except Empleado.DoesNotExist:
            try:
                empleador = Empleado.objects.get(email=e['email'])
                if empleador.password == e['password']:
                    return JsonResponse({'success': True,'data':{'email':empleado.email,'password':empleado.password}})
                else:
                    return JsonResponse({'Error': 'La contraseña es incorrecta'})
            except Empleador.DoesNotExist:
                return JsonResponse({'Error': 'El email no existe en la base de datos'})

def perfil(request,*args, **kwargs):
<<<<<<< HEAD
    e=json.loads(request.body.decode('utf-8'))
    try:
        empleado = Empleador.objects.get(email=e['email'])
        return JsonResponse({'data':model_to_dict(empleado)})
    except Empleador.DoesNotExist:
        return JsonResponse({'Error': 'El email no existe en la base de datos'})
=======
    if request.method=='POST':
        e=json.loads(request.body.decode('utf-8'))
        try:
            empleado = Empleado.objects.get(email=e['email'])
            return JsonResponse({'data':model_to_dict(empleado)})
        except Empleado.DoesNotExist:
            return JsonResponse({'Error': 'El email no existe en la base de datos'})
    if request.method=='DELETE':
        e=json.loads(request.body.decode('utf-8'))
        try:
            empleado=Empleado.objects.get(email=e['email'])
            empleado.delete()
            return JsonResponse({'message': 'Empleado deleted successfully'})
        except Empleado.DoesNotExist:
            return JsonResponse({'Error': 'El email no existe en la base de datos'})
    
>>>>>>> 12027215a2952f0c94bb9b167ff59587e83ba0c1

class EmpleadorViewSet(viewsets.ModelViewSet):
    queryset = Empleador.objects.all()
    serializer_class = EmpleadorSerializer

class OficioViewSet(viewsets.ModelViewSet):
    queryset = Oficio.objects.all()
    serializer_class = OficioSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class CalificacionViewSet(viewsets.ModelViewSet):
    queryset = Calificacion.objects.all()
    serializer_class = CalificacionSerializer

class ContratoViewSet(viewsets.ModelViewSet):
    queryset = Contrato.objects.all()
    serializer_class = ContratoSerializer

class ContratoEmpleadoViewSet(viewsets.ViewSet):
    def list(self, request):
        contratos_disponibles = Contrato.objects.all()
        serializer = ContratoSerializer(contratos_disponibles, many=True)
        return response(serializer.data)

class PostulacionViewSet(viewsets.ModelViewSet):
    queryset = Postulacion.objects.all()
    serializer_class = PostulacionSerializer

