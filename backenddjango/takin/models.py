from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class empleado(models.Model):
    nombre=models.CharField(max_length=50)
    apellido=models.CharField(max_length=50)
    edad = models.IntegerField()
    oficio1=models.CharField(max_length=50)
    oficio2=ArrayField(models.CharField(max_length=50),blank=True,default=list)
    edad=models.IntegerField()
    correo=models.EmailField()
    genero=models.CharField(max_length=50)
