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
        fields = ['id', 'ubicacion', 'pago', 'titulo', 'rubro']

class EmpleadoSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    contratos = ContratoSerializer(many=True)

    class Meta:
        model = Empleado
        fields = ['id', 'persona', 'oficio1', 'oficio2', 'correo', 'contraseña', 'genero', 'contratos']

class EmpleadorSerializer(serializers.ModelSerializer):
    persona = PersonaSerializer()
    contratos = ContratoSerializer(many=True)

    class Meta:
        model = Empleador
        fields = ['id', 'persona', 'ubicacion', 'correo', 'contraseña', 'contratos']

class PostulacionSerializer(serializers.ModelSerializer):
    empleado = EmpleadoSerializer()
    contrato = ContratoSerializer()

    class Meta:
        model = Postulacion
        fields = ['id', 'empleado', 'contrato', 'fecha_postulacion']