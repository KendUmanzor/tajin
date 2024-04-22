from rest_framework import serializers
from takin.models import Empleado,Empleador,Persona,Contrato, Postulacion,Calificacion,Oficio

class OficioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oficio
        fields = '__all__'

class CalificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calificacion
        fields = '__all__'

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ['id', 'nombre', 'apellido', 'edad']

class ContratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contrato
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleado
        fields ='__all__'

class EmpleadorSerializer(serializers.ModelSerializer):



    class Meta:
        model = Empleador
        fields = '__all__'

class PostulacionSerializer(serializers.ModelSerializer):
    empleado = EmpleadoSerializer()
    contrato = ContratoSerializer()

    class Meta:
        model = Postulacion
        fields = ['id', 'empleado', 'contrato', 'fecha_postulacion']
