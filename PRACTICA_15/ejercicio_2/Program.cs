﻿using System;
/*
 Ejercicio 2.
Se quiere modelar un curso de ComunidadIT.
• El Curso tendrá un nombre, una cantidad máxima de alumnos, un
Profesor y un Listado de Alumnos.
• Tanto de un Profesor como de un Alumnos se guarda su DNI, Nombre,
Apellido y Fecha de Nacimiento.
• Del Profesor también se guarda la cantidad de años de Experiencia.
• Del Alumno se especifica si tiene trabajo o no.
• Realizar un programa que permita cargar un curso y al final muestre
todo su detalle.
 */
namespace ejercicio_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }


    class Curso
    {
        private string curso;

        private double cantidadMaxAlumnos;

        private string profesor;

        private string listadoAlumnos;

        public Curso()
        {
            curso = ".Net";
            cantidadMaxAlumnos = 30;


        }

    }




}







