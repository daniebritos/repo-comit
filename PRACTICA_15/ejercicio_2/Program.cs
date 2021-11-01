using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

            //lista de alumnos
            Alumno oAlumno1 = new Alumno("Daniel", "Britos", 32341442, "10/06/1986", true);
            Alumno oAlumno2 = new Alumno("Maria", "Rodriguez", 42123414, "05/12/1989", false);
            Alumno oAlumno3 = new Alumno("Antonio", "Banderas", 32414442, "11/06/1996", true);
            Alumno oAlumno4 = new Alumno("Jorge", "Newbery", 42423445, "30/07/2000", true);
            Alumno oAlumno5 = new Alumno("Ana", "Suarez", 42231432, "12/08/1987", false);
            Alumno oAlumno6 = new Alumno("Jose", "Sarmiento", 323144512, "01/05/1996", false);
            List<Alumno> Alumnos = new List<Alumno>{
                oAlumno1,oAlumno2,oAlumno3,oAlumno4,oAlumno5,oAlumno6
            };

            // foreach (Alumno i in Alumnos)
            // {
            //     Console.WriteLine(i.Apellido + " " + i.Nombre + " " + i.DNI);
            // };



            //profesor
            Profesor oProfesor = new Profesor("Martin", "Camparetto", 42451552, "10/06/1983", 10);


            //curso
            Curso oCurso = new Curso();
            oCurso.Nombre = ".NET";
            oCurso.CantMaxAlumnos = 20;



            Console.WriteLine($"Nombre del curso: {oCurso.Nombre}\nCantidad maxima de alumnos: { oCurso.CantMaxAlumnos}\nProfesor: { oProfesor.Nombre}\nLista de alumnos: ");
            foreach (Alumno i in Alumnos)
            {
                Console.WriteLine(i.Apellido + " " + i.Nombre + " " + i.DNI);
            };








            Console.ReadLine();



        }
    }

}







