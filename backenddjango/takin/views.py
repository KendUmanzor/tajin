import json
from urllib import response
from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework import generics,viewsets, status
from takin.models import Empleado,Contrato,Empleador, Postulacion,Oficio,Calificacion
#from takin.serializador import empleadoSerializer
from takin.serializador import EmpleadoSerializer, ContratoSerializer, EmpleadorSerializer, PostulacionSerializer,OficioSerializer, CalificacionSerializer

from django.shortcuts import get_object_or_404
from django.http import HttpResponse, JsonResponse
from.models import Empleado, Empleador

def login(request, *args, **kwargs):
    if request.method == 'GET':
        return HttpResponse('hola')
    if request.method == 'POST':
        e=json.loads(request.body.decode('utf-8'))
    
        
        try:
            empleado = Empleado.objects.get(email=e['email'])
            if empleado.password == e['password']:
                return JsonResponse({'success': True,'data':model_to_dict(empleado)})
            else:
                return JsonResponse({'Error': 'La contraseña es incorrecta'})
        except Empleado.DoesNotExist:
            try:
                empleador = Empleador.objects.get(email=e['email'])
                if empleador.password == e['password']:
                    return JsonResponse({'success': 'El usuario y contraseña son correctos'})
                else:
                    return JsonResponse({'Error': 'La contraseña es incorrecta'})
            except Empleador.DoesNotExist:
                return JsonResponse({'Error': 'El email no existe en la base de datos'})

    return JsonResponse({'error': 'Sólo se permite el método POST'})
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

    def create(self, request):
        data = request.data
        empleado_id = data.get('empleado_id')
        contrato_id = data.get('contrato_id')

        if not empleado_id or not contrato_id:
            return response({'mensaje': 'meta un ID de empleado y un ID de contrato'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            empleado = Empleado.objects.get(pk=empleado_id)
            contrato = Contrato.objects.get(pk=contrato_id)
        except (Empleado.DoesNotExist, Contrato.DoesNotExist):
            return response({'mensaje': 'Empleado o contrato no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        empleado.contratos.add(contrato)
        return response({'mensaje': 'Contrato añadido'}, status=status.HTTP_201_CREATED)

class PostulacionViewSet(viewsets.ModelViewSet):
    queryset = Postulacion.objects.all()
    serializer_class = PostulacionSerializer
    
