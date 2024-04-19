from urllib import response
from django.shortcuts import render
from rest_framework import generics,viewsets, status
from takin.models import Empleado,Contrato,Empleador, Postulacion,Oficio,Calificacion
#from takin.serializador import empleadoSerializer
from takin.serializador import EmpleadoSerializer, ContratoSerializer, EmpleadorSerializer, PostulacionSerializer,OficioSerializer, CalificacionSerializer


class EmpleadorViewSet(generics.views):
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
    
