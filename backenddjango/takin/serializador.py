from rest_framework import serializers
from .models import empleado

class empleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model= empleado
        fields =('id','nombre','apellido','edad','oficio1','oficio2','correo','genero')
