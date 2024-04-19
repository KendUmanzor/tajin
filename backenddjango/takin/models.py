from typing import Any
from django.db import models
from abc import ABC,abstractclassmethod
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    edad = models.IntegerField()
    
    

class Empleado(Persona):
    # id = models.AutoField(primary_key=True)
    # persona = models.OneToOneField(Persona, on_delete=models.CASCADE,null=True)
    # oficios = models.ManyToManyField(Oficio, related_name='empleados')
    correo = models.EmailField()
    contraseña = models.CharField(max_length=100)
    genero = models.CharField(max_length=10)
    # contratos = models.ManyToManyField(Contrato, related_name='empleados')
    


class Empleador(Persona):
    # id = models.AutoField(primary_key=True)
    # persona = models.OneToOneField(Persona, on_delete=models.CASCADE,null=True)
    ubicacion = models.CharField(max_length=100)
    correo = models.EmailField()
    contraseña = models.CharField(max_length=100)
    # contratos = models.ManyToManyField(Contrato, related_name='empleadores',default=[])
    class Meta:
        verbose_name= 'Empleador'

class Contrato(models.Model):
    id = models.AutoField(primary_key=True)
    ubicacion = models.CharField(max_length=100)
    pago = models.DecimalField(max_digits=10, decimal_places=2)
    titulo = models.CharField(max_length=100)
    rubro = models.CharField(max_length=100)
    empleador=models.ForeignKey(Empleador,on_delete=models.CASCADE,default=None)

class Postulacion(models.Model):
    id = models.AutoField(primary_key=True)
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='postulaciones')
    contrato = models.ForeignKey(Contrato, on_delete=models.CASCADE, related_name='postulantes')
    fecha_postulacion = models.DateTimeField(auto_now_add=True)
    
class Calificacion(models.Model):
    id = models.AutoField(primary_key=True)
    empleador = models.ForeignKey(Empleador, on_delete=models.CASCADE, related_name='calificaciones')
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='calificaciones')
    contrato = models.ForeignKey(Contrato, on_delete=models.CASCADE, related_name='calificaciones')
    puntuacion = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comentario = models.TextField()
    fecha_calificacion = models.DateTimeField(auto_now_add=True)

class Oficio(models.Model):
    nombre = models.CharField(max_length=100)
    Empleado=models.ManyToManyField(Empleado,related_name='oficios')
